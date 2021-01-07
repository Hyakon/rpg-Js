import Character from "./character.js";

class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0) {
    super(hp, dmg, mana);
  }
  rage() {
    this.dmg++;
    this.hp--;
  }
}

export default Berzerker;
