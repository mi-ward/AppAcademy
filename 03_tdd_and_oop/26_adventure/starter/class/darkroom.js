const { Room } = require('./room');

class Darkroom extends Room {
    constructor(name, description) {
        super()
        this.name = name;
        this.description = description;
        this.lit = false;
        this.lastDirection = "";
    };

    getExitsString() {
        if (this.lit) {
            return `Exits: ${this.getExits().join(", ")}`
      } else {
            return `Exits: ${this.lastDirection}`
      }
    }

    printRoom() {
        console.clear();
        if (this.lit === false) {
            console.log("");
            console.log(this.name);
            console.log("");
            console.log("Too dark to see anything.")
            console.log("");
            console.log(this.getExitsString());

        } else {
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.getEnemies().length > 0) {
          console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
        }
        if (this.items.length > 0) {
          console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        console.log(this.getExitsString());
        console.log("");
        }
    }

}

module.exports = {
    Darkroom,
}
