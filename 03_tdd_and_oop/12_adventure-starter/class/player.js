const {Item} = require('./item');
const {Room} = require('./room');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
        this.dead = false;
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
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
                console.log(`${this.items[i].name}`);
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
}

module.exports = {
  Player,
};

console.log();
