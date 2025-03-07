// ## Bonus Phase 5: Testing

// Imagine you have a company structured like this:

// | Name     | Salary  | Title      | Boss   |
// | -------- | ------- | ---------- | ------ |
// | Hobbes   | 1000000 | Founder    | null   |
// | Calvin   | 130000  | Director   | Hobbes |
// | Susie    | 100000  | TA Manager | Calvin |
// | Lily     | 90000   | TA         | Susie  |
// | Clifford | 90000   | TA         | Susie  |

// If Hobbes gets a bonus multiplier of 0.05, their bonus will be $70,500.

// If Calvin gets a bonus multiplier of 0.05, their bonus will be $20,500.

// If Susie gets a bonus multiplier of 0.05, their bonus will be $14,000.

// If Lily gets a bonus multiplier of 0.05, their bonus will be $4,500.

// If Clifford gets a bonus multiplier of 0.05, their bonus will be $4,500.

// Create a new file called __test.js__. Create the scenario above and make sure
// you get the correct bonuses for each employee.

const chai = require('chai');
const expect = chai.expect;

const Employee = require('../employee');
const Manager = require('../manager');

describe('Extended calculateBonus tests', () => {
    let hobbes;
    let calvin;
    let susie;
    let lily;
    let clifford;
    beforeEach(() => {
        hobbes = new Manager('Hobbes', 1000000, 'Founder');
        calvin = new Manager('Calvin', 130000, 'Director', hobbes);
        susie = new Manager('Susie', 100000, 'TA Manager', calvin);
        lily = new Employee('Lily', 90000, 'TA', susie);
        clifford = new Employee('Clifford', 90000, 'TA', susie);
    });

    describe('Hobbes Bonus', () => {
        it('should calculate Hobbes bonus', () => {
            expect(hobbes.calculateBonus(0.05)).to.equal(70500);
        });
    });

    describe('Calvin Bonus', () => {
        it('should calculate Calvin bonus', () => {
            expect(calvin.calculateBonus(0.05)).to.equal(20500);
        });
    });

    describe('Susie Bonus', () => {
        it('should calculate Susie bonus', () => {
            expect(susie.calculateBonus(0.05)).to.equal(14000);
        });
    });

    describe('Lily Bonus', () => {
        it('should calculate Lily bonus', () => {
            expect(lily.calculateBonus(0.05)).to.equal(4500);
        });
    });

    describe('Clifford Bonus', () => {
        it('should calculate Clifford bonus', () => {
            expect(clifford.calculateBonus(0.05)).to.equal(4500);
        });
    });


});
