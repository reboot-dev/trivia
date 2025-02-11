import { PartialMessage, Timestamp } from "@bufbuild/protobuf";
import {
  WriterContext,
  ReaderContext,
  WorkflowContext,
  Loop,
} from "@reboot-dev/reboot";
import {
  Game,
  GameStatus,
  Question,
  AddPlayerRequest,
  AddPlayerResponse,
  VisibleStateResponse,
  VisibleStateRequest,
  TickerRequest,
  TickerResponse,
  AnswerRequest,
  AnswerResponse
} from "../../api/trivia/v1/trivia_rbt.js";

import { QUESTIONS } from "./questions.js";

const QUESTION_TIME_MS = 30 * 1000;
const TICK_TIME_MS = 250;

export class GameServicer extends Game.Servicer {
  async addPlayer(
    context: WriterContext,
    state: Game.State,
    request: AddPlayerRequest
  ): Promise<AddPlayerResponse | PartialMessage<AddPlayerResponse>> {
    state.players.push(request.playerName);

    if (state.players.length === 1) {
      nextQuestion(state);
      await this.lookup().schedule().ticker(context);
    }

    return {};
  }

  async answer(
    context: WriterContext,
    state: Game.State,
    request: AnswerRequest
  ): Promise<AnswerResponse | PartialMessage<AnswerResponse>> {
    if (state.status !== GameStatus.QUESTION_RUNNING) {
      throw new Error("A question is not running.");
    }
    if (request.question !== state.question.question) {
      throw new Error("That is not the current question.");
    }

    state.answers[request.playerName] = request.answerIndex;

    return {};
  }

  async visibleState(
    context: ReaderContext,
    state: Game.State,
    request: VisibleStateRequest
  ): Promise<VisibleStateResponse | PartialMessage<VisibleStateResponse>> {

    const correctAnswerIdx = state.status === GameStatus.COOLDOWN ? state.correctAnswerIdx : undefined;

    const remainingMilliseconds = Math.max(0, state.nextStatus.toDate().getTime() - Date.now());

    let answers = {};
    if (state.status == GameStatus.COOLDOWN) {
      // Render all answers.
      answers = state.answers;
    } else {
      // Render only the user's answer, if any.
      if (request.playerName in state.answers) {
        answers = { [request.playerName]: state.answers[request.playerName] };
      }
    }

    return {
      status: state.status,
      question: state.question,
      correctAnswerIdx: correctAnswerIdx,
      answers: answers,
      remainingMilliseconds: remainingMilliseconds,
    };
  }

  async ticker(
    context: WorkflowContext,
    request: TickerRequest,
  ): Promise<TickerResponse | PartialMessage<TickerResponse> | Loop> {

    await this.state.write(`tick ${context.iteration}`, context, async (state) => {
      if (state.nextStatus.toDate().getTime() <= Date.now()) {
        // Time to move to the next question!
        if (state.status === GameStatus.COOLDOWN) {
          nextQuestion(state);
        } else {
          nextCooldown(state);
        }
      }
      state.tick = context.iteration;
    });

    return new Loop({when: new Date(Date.now() + TICK_TIME_MS)});
  }
}

function nextCooldown(state: Game.State) {
  state.status = GameStatus.COOLDOWN;

  state.nextStatus = Timestamp.fromDate(new Date(Date.now() + QUESTION_TIME_MS));
}

function nextQuestion(state: Game.State) {
  state.status = GameStatus.QUESTION_RUNNING;

  const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  state.question = new Question({
    question: question.question,
    potentialAnswers: question.answers,
  });
  state.correctAnswerIdx = question.correctAnswerIdx;

  state.answers = {};

  state.nextStatus = Timestamp.fromDate(new Date(Date.now() + QUESTION_TIME_MS));
}
