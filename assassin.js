import Character from "./character.js";

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

export default Assassin;
