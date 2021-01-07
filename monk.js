import Character from "./character.js";

class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200) {
    super(hp, dmg, mana);
  }
  heal() {
    this.hp += 8;
    this.mana -= 25;
  }
}

export default Monk;
