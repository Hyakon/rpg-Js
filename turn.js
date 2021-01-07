const PLAYING = "playing";
const LOSER = "loser";
const WINNER = "winner";
const MAXTURN = 10;

class Turn {
  constructor(turn, players) {
    this.players = this.shuffle(players);
    this.startTurn(turn);
  }

  shuffle(players) {
    return players.sort(() => Math.random() - 0.5);
  }

  play(player) {
    console.log(`It's time for ${player.name} `);
    this.choice(player);
  }

  hit = () => {
    this.players;
    console.log();
  };

  choice(player) {
    const input = prompt(this.menu()).toLowerCase();
    const choice = {
      stats: () => {
        this.players.map((player) => console.log(player.name, player.info));
        return this.choice(player);
      },
      info: () => {
        player.info.skillDetails();
        return this.choice(player);
      },
      hit: () => {
        const victim = prompt(
          `Who do you want to hit : ${this.players.map(({ name, info }) =>
            info.status === PLAYING ? name : ""
          )}`
        );
        const target = this.players.filter(({ name }) => name === victim)[0];
        if (!target) return this.choice(player);
        player.info.dealDamage(player.info.dmg, target.info);
        console.log(
          `${player.name} is attacking ${target.name}. He deals him ${player.info.dmg} damages. ${target.name} got ${target.info.hp} left`
        );
      },
      skill: () => {
        console.log("skill");
      },
      default: () => {
        return this.choice(player);
      },
    };
    return choice[input] ? choice[input]() : choice["default"]();
  }

  menu() {
    return `
      Type :
          Stats -> If you want to see the current status
          Info  -> If you want to know more about your skill
          Hit -> If you want to hit someone
          Skill -> If you want to use your special skill
      `;
  }

  startTurn(turn) {
    console.log(`Tour numero : ${turn}`);
    this.players.map((player) =>
      player.info.status === PLAYING ? this.play(player) : ""
    );
  }
}

export default Turn;
