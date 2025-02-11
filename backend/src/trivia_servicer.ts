import { PartialMessage } from "@bufbuild/protobuf";
import {
  WriterContext,
} from "@reboot-dev/reboot";
import {
  Game,
  GameStatus,
  Question,
  AddPlayerRequest,
  AddPlayerResponse,
} from "../../api/trivia/v1/trivia_rbt.js";

import { QUESTIONS } from "./questions.js";

export class GameServicer extends Game.Servicer {
  async addPlayer(
    context: WriterContext,
    state: Game.State,
    request: AddPlayerRequest
  ): Promise<AddPlayerResponse | PartialMessage<AddPlayerResponse>> {
    state.players.push(request.playerName);

    if (state.players.length === 1) {
      await nextQuestion(state);
    }

    return {};
  }
}

function nextQuestion(state: Game.State) {
  state.status = GameStatus.QUESTION_RUNNING;


  const question = QUESTIONS[Math.random() * QUESTIONS.length];
  state.question = new Question({
    question: question.question,
    potentialAnswers: question.answers,
  });
  state.correctAnswerIdx = question.correctAnswerIdx;
}
