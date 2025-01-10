const {Character} = require('./character');

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description)
    this.currentRoom = currentRoom;
    this.health = 50;
    this.cooldown = 3000;
    this.strength = 10;
    this.attackTarget = null;
    this.act()
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    let exits = this.currentRoom.getExits();
    let exitIdx = Math.floor(Math.random() * exits.length);
    let direction = exits[exitIdx]

    this.currentRoom = this.currentRoom.exits[direction];
    this.cooldown += 3000;


  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.player.applyDamage(this.strength);
    console.log(`${this.name} attacks ${this.player.name}`)
    this.cooldown += 1;
    this.rest();

  }

  applyDamage(amount) {
    this.health -= amount;
    this.attackTarget = this.player;

  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget !== null) {
      this.attack();
    } else {
      this.scratchNose();
      //this.randomMove();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 3000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
