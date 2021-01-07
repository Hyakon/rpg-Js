const PLAYING = "playing";
const LOSER = "loser";
const WINNER = "winner";
const TURN = 10;

import Character from "./character.js";
import Game from "./game.js";

const play = new Game();

while (play.turnLeft > 0) {
  play.watchStats();
  play.newTurn();
}
