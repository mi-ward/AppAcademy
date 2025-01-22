const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Darkroom} = require("../class/darkroom.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

const {World} = require("../class/world.js");

const {Character} = require("../class/character.js");
const {Enemy} = require("../class/enemy.js");

describe('Dark Room', function() {

    let darkroom;
    let westroom;
    let eastroom;
    let item;
    let character;

    beforeEach(function() {

        darkroom =  new Darkroom("Test Room", "A test room");
        item = new Item("rock", "just a simple rock");
        character = new Player('Character', darkroom);
        character.items.push(item);
        westroom = new Room("West Room", "Room to the West");
        eastroom = new Room("East Room", "Room to the East");
        eastroom.items.push(new Item('torch', 'a torch'));
        darkroom.connectRooms('e', eastroom);
        eastroom.connectRooms('w', darkroom);
        darkroom.connectRooms('w', westroom);
      });


      it('should have name, description, and lit attributes', function () {
        expect(darkroom.name).to.equal("Test Room");
        expect(darkroom.description).to.equal('A test room');
        expect(darkroom.lit).to.equal(false);
      });

      it('should not show exits except for the one the player came through', function() {
        expect(darkroom.lit).to.be.false;
        expect(darkroom.getExitsString()).to.equal(`Exits: `)
        darkroom.lit = true;
        expect(darkroom.lit).to.be.true;
        expect(darkroom.getExitsString()).to.equal("Exits: e, w")
        darkroom.lit = false;
        expect(darkroom.lit).to.be.false;
        //console.log(character)
        expect(character.currentRoom).to.deep.equal(darkroom);
        character.move('e');
        expect(character.currentRoom).to.deep.equal(eastroom);
        character.move('w');
        expect(darkroom.getExitsString()).to.equal(`Exits: e`);
      });

    //   it('should not let you see anything if the room is not lit', function() {});

      it('should make the room light up when character is holding the torch', function() {

        expect(darkroom.lit).to.be.false;
        character.move('e');
        character.takeItem('torch');
        character.move('w');
        expect(darkroom.lit).to.be.true;
      });
    });
