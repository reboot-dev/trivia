import { Application } from "@reboot-dev/reboot";
import { GameServicer } from "./trivia_servicer.js";

const initialize = async (context) => {};

new Application({
  servicers: [GameServicer],
  initialize,
}).run();
