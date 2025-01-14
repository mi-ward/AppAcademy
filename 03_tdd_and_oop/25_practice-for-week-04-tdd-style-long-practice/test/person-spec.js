const { expect } = require('chai');
const Person = require('../problems/person.js');

describe("class tests", () => {
    let person1;
    let person2;
    let person3;

    beforeEach(() => {
        person1 = new Person("Jim", 25);
        person2 = new Person("Jen", 25);
        person3 = new Person("Jon");
    });


    context("class has name and age properties that can be set", () => {

        it('should have name and age properities upon initialization', () => {
            expect(person1).has.own.property('name');
            expect(person1).has.own.property('age');
            expect(person1.name).to.be.eq("Jim");
            expect(person1.age).to.be.eq(25);
        })
    })

    context("sayHello function", () => {
        it('should have function and return a greeting', () => {
            expect(person1.sayHello).to.be.a('function');
            expect(person1.sayHello()).to.be.eq(`Hi ${person1.name}!`)
        })
    })

    context("visit function", () => {
        it('should return initial person visiting the second person', () => {
            expect(person1.visit).to.be.a('function');
            expect(person1.visit(person2)).to.be.eq(`${person1.name} visited ${person2.name}`)
        })
    })

    context("switchVisit function", () => {
        it('should invoke passed in person\'s visit function with initial person as arg', () => {
            expect(person1.switchVisit).to.be.a('function');
            expect(person1.switchVisit(person2)).to.be.eq(person2.visit(person1));
        })
    })

    context("update function", () => {
        it('update initial object with name and age otherwise throw a type error', () => {
            expect(person1.update).to.be.a('function');
            expect(() => {person1.update("")}).to.throw(TypeError);
            expect(() => {person1.update({})}).to.throw(TypeError);

            person1.update(person2);
            expect(person1.name).to.be.equal(person2.name);
            expect(person1.age).to.be.equal(person2.age);
        })
    })

    context("tryUpdate function", () => {
        it('return true or false depending on result of update', () => {
            expect(person1.tryUpdate).to.be.a('function');
            expect(person1.tryUpdate(person2)).to.be.true;
            expect(person1.tryUpdate({})).to.be.false;
        })
    })

    context("greetAll function", () => {
        it('return true or false depending on result of update', () => {
            expect(Person).itself.to.respondTo('greetAll');
            expect(Person.greetAll([person1, person2])).to.be.deep.eq([`Hi ${person1.name}!`, `Hi ${person2.name}!`]);
        })
    })
})
