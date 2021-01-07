const PLAYING = "playing";
const LOSER = "loser";
const WINNER = "winner";
const MAXTURN = 10;

import Fighter from "./fighter.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assassin from "./assassin.js";
import Turn from "./turn.js";
class Game {
  constructor(turnLeft = MAXTURN) {
    this.turnLeft = turnLeft;
    this.players = [
      { name: "Grace", info: new Fighter() },
      { name: "Ulder", info: new Paladin() },
      { name: "Moana", info: new Monk() },
      { name: "Draven", info: new Berzerker() },
      { name: "Carl", info: new Assassin() },
    ];
  }

  newTurn() {
    this.turnLeft--;
    const current = new Turn(MAXTURN - this.turnLeft, this.players);
    this.players = current.players.filter(({ info }) => info.status != LOSER);
    console.log(this.players);
    this.victory();
  }

  victory() {
    if (this.players.length <= 1) {
      this.turnLeft = 0;
      this.players[0].status = WINNER;
      this.watchStats;
    }
  }
  watchStats() {
    this.players.map((player) => console.log(player));
  }
}

export default Game;
