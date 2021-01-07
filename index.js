const PLAYING = "playing";
const LOSER = "loser";
const WINNER = "winner";
const MAXTURN = 10;

class Character {
  constructor(hp, dmg, mana) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = PLAYING;
  }
  takeDamage(dmg) {
    this.hp -= dmg;
    this.hp <= 0 ? (this.status = LOSER) : "";
  }
  dealDamage(dmg, victim) {
    victim.takeDamage(dmg);
    victim.status === LOSER ? (this.mana += 20) : "";
  }
  skillDetails() {
    console.log(`I don't have any skill`);
  }
}

class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40) {
    super(hp, dmg, mana);
  }
  darkVision(victim) {
    this.shield = 2;
    this.mana -= 20;
    this.dealDamage(5, victim);
  }
}

class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160) {
    super(hp, dmg, mana);
  }
  healingLightning(victim) {
    this.hp += 5;
    this.mana -= 40;
    this.dealDamage(4, victim);
  }
}

class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200) {
    super(hp, dmg, mana);
  }
  heal() {
    this.hp += 8;
    this.mana -= 25;
  }
}

class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0) {
    super(hp, dmg, mana);
  }
  rage() {
    this.dmg++;
    this.hp--;
  }
}

class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20) {
    super(hp, dmg, mana);
  }
  shadowHit(victim) {
    this.shield = Infinity;
    mana -= 20;

    this.dealDamage(7, victim);
    victim.status === LOSER ? "" : (this.hp -= 7);
  }
}

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

const game = new Game();

while (game.turnLeft > 0) {
  game.watchStats();
  game.newTurn();
}
