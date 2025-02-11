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

  async visibleState(
    context: ReaderContext,
    state: Game.State,
    request: VisibleStateRequest
  ): Promise<VisibleStateResponse | PartialMessage<VisibleStateResponse>> {

    const correctAnswerIdx = state.status === GameStatus.COOLDOWN ? state.correctAnswerIdx : undefined;

    const remainingMilliseconds = Math.max(0, state.nextStatus.toDate().getTime() - Date.now());

    return {
      status: state.status,
      question: state.question,
      correctAnswerIdx: correctAnswerIdx,
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
        nextQuestion(state);
        // TODO: implement the next game status.
      }
    });

    return new Loop({when: new Date(Date.now() + TICK_TIME_MS)});
  }
}

function nextQuestion(state: Game.State) {
  state.status = GameStatus.QUESTION_RUNNING;

  const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  state.question = new Question({
    question: question.question,
    potentialAnswers: question.answers,
  });
  state.correctAnswerIdx = question.correctAnswerIdx;

  state.nextStatus = Timestamp.fromDate(new Date(Date.now() + QUESTION_TIME_MS));
}
