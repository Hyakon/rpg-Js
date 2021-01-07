import Character from "./character.js";

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

export default Fighter;
