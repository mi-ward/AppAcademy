
const {Character} = require('./character');
const {Room} = require('./room');
const {Item} = require('./item');
const {Food} = require('./food');
const {Player} = require('./player');
const {World} = require('./world');
const {Enemy} = require('./enemy');


room = new Room("Test Room", "A test room");
let westRoom = new Room("West Room", "A room to the west of testRoom");
room.connectRooms('w', westRoom);


item = new Item("rock", "just a simple rock");
sandwich = new Food("sandwich", "a delicious looking sandwich");
enemy = new Enemy('enemy', 'an ordinary character', room);
player = new Player("player", room);

World.enemies.push(enemy);
World.setPlayer(player);

enemy.items.push(item);
room.items.push(sandwich);


enemy.randomMove()
console.log(enemy);
