class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
    this.lastMove = "";

  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    this.currentRoom.items = this.currentRoom.items.concat(this.items);
    this.items = [];
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
