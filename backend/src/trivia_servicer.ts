import { PartialMessage } from "@bufbuild/protobuf";
import {
  WriterContext,
} from "@reboot-dev/reboot";
import {
  Game,
  AddPlayerRequest,
  AddPlayerResponse,
} from "../../api/trivia/v1/trivia_rbt.js";

class GameServicer extends Game.Servicer {
  async addPlayer(
    context: WriterContext,
    state: Game.State,
    request: AddPlayerRequest
  ): Promise<AddPlayerResponse | PartialMessage<AddPlayerResponse>> {

    throw new Error("Not implemented");
  }
}
