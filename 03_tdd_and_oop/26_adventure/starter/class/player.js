const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {
    let opposite;
    if (direction === "n") {
      opposite = "s";
    } else if (direction === "s") {
      opposite = "n";
    } else if (direction === "w") {
      opposite = "e";
    } else if (direction === "e") {
      opposite = "w";
    }



    this.currentRoom
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {

      if (nextRoom.constructor.name === 'Darkroom') {
        if (this.getItemByName('torch')) {
          nextRoom.lit = true;
        } else {
          nextRoom.lit = false;
        }
        nextRoom.lastDirection = opposite;
      }
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName);
    let roomItems = this.currentRoom.items;
    let playerItems = this.items;
    let idx = roomItems.indexOf(item);
    this.currentRoom.items = roomItems.slice(0, idx).concat(roomItems.slice(idx+1));
    playerItems.push(item);
    console.log(`${itemName} taken by ${this.name}`)
  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName);
    let roomItems = this.currentRoom.items;
    let playerItems = this.items;
    let idx = playerItems.indexOf(item);
    this.items = playerItems.slice(0, idx).concat(playerItems.slice(idx+1));
    roomItems.push(item);
    console.log(`${itemName} dropped by ${this.name}`)
  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName);
    let playerItems = this.items;
    let idx = playerItems.indexOf(item);

    if (item.constructor.name === 'Food') {
        this.items = playerItems.slice(0, idx).concat(playerItems.slice(idx+1));
        console.log(`${itemName} eaten by ${this.name}`)

        if (itemName === 'apple') {
            this.dead = true;
        }

        if (itemName === 'sandwich') {
          console.log("You win!");
          process.exit();
        }

    } else {
        console.log(`${itemName} is not edible.`)
    }
  }

  getItemByName(name) {
    for (let idx = 0; idx < this.items.length; idx++) {
      if (name === this.items[idx].name) {
          return this.items[idx];
      }
    }
  }

  hit(name) {
    this.currentRoom.getEnemyByName(name).applyDamage(this.strength);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
