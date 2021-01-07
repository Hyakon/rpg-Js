const PLAYING = "playing";
const LOSER = "loser";
const WINNER = "winner";

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

export default Character;
