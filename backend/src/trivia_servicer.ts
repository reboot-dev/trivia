import { PartialMessage } from "@bufbuild/protobuf";
import {
  WriterContext,
} from "@reboot-dev/reboot";
import {
  Game,
  AddPlayerRequest,
  AddPlayerResponse,
} from "../../api/trivia/v1/trivia_rbt.js";

export class GameServicer extends Game.Servicer {
  async addPlayer(
    context: WriterContext,
    state: Game.State,
    request: AddPlayerRequest
  ): Promise<AddPlayerResponse | PartialMessage<AddPlayerResponse>> {
    state.players.push(request.playerName);
    return {};
  }
}
