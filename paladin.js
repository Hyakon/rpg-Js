import Character from "./character.js";

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

export default Paladin;
