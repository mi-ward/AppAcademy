const { expect } = require('chai');
const Triangle = require('../problems/triangle');
const Isosceles = require('../problems/isosceles');
const Scalene = require('../problems/scalene');

describe("Triangle tests", () => {
    let testTriangle;
    let testTriangle2;

    let testScalene;
    let testScalene2;
    let testScalene3;

    let testIsosceles1;
    let testIsosceles2;
    let testIsosceles3;
    context("Triangle class test", () => {
        testTriangle = new Triangle(5,6,7);
        testTriangle2 = new Triangle(5,6,12);
        it("should intake 3 sides and set them on the class", () => {
            expect(testTriangle).has.ownProperty('side1');
            expect(testTriangle).has.ownProperty('side2');
            expect(testTriangle).has.ownProperty('side3');
            expect(testTriangle.side1).equals(5)
            expect(testTriangle.side2).equals(6)
            expect(testTriangle.side3).equals(7)
        })

        it("should have a function to get the perimeter", () => {
            expect(testTriangle.getPerimeter).to.be.a('function');
            expect(testTriangle.getPerimeter(5,6,7)).to.be.equal(18);
        })

        it("should have a function to ensure side lengths are valid", () => {
            expect(testTriangle.hasValidSideLengths).to.be.a('function');
            expect(testTriangle.hasValidSideLengths()).to.be.true;
            expect(testTriangle2.hasValidSideLengths()).to.be.false;
        })

        it("should have a function to describe triangle's validity", () => {
            expect(testTriangle.validate).to.be.a('function');
            expect(testTriangle).to.not.haveOwnProperty('isValid');
            expect(testTriangle.validate()).to.be.undefined;
            expect(testTriangle).to.haveOwnProperty('isValid')
            expect(testTriangle.isValid).to.be.true;

            expect(testTriangle2).to.not.haveOwnProperty('isValid');
            expect(testTriangle2.validate()).to.be.undefined;
            expect(testTriangle2).to.haveOwnProperty('isValid')
            expect(testTriangle2.isValid).to.be.false;
        })

        it("should have a static function to return valid triangles", () => {
            expect(Triangle.getValidTriangles).to.be.a('function');
            expect(Triangle.getValidTriangles(testTriangle, testTriangle2)).to.be.deep.equal([testTriangle]);
        })
    });

    testScalene = new Scalene(5,6,7);
    testScalene2 = new Scalene(5,6,12);
    testScalene3 = new Scalene(3,3,3);
    context("Scalene class tests", () => {
        it('should extend Triangle and have isValidTriange property', () => {
            expect(testScalene).has.ownProperty('side1');
            expect(testScalene).has.ownProperty('side2');
            expect(testScalene).has.ownProperty('side3');
            expect(testScalene).to.have.ownProperty('isValidTriangle');

            expect(testScalene.side1).to.equal(5)
            expect(testScalene.side2).to.equal(6)
            expect(testScalene.side3).to.equal(7)
            expect(testScalene.isValidTriangle).to.be.true;
            expect(testScalene2.isValidTriangle).to.be.false;
        })

        it('should have an isScalene method', () => {
            expect(testScalene.validate).to.be.a('function');
            expect(testScalene).to.not.haveOwnProperty('isValidScalene');
            expect(testScalene.validate()).to.be.undefined;
            expect(testScalene).to.haveOwnProperty('isValidScalene')
            expect(testScalene.isValidScalene).to.be.true;

            expect(testScalene2).to.not.haveOwnProperty('isValidScalene');
            expect(testScalene2.validate()).to.be.undefined;
            expect(testScalene2).to.haveOwnProperty('isValidScalene')
            expect(testScalene2.isValidScalene).to.be.true;

            expect(testScalene3).to.not.haveOwnProperty('isValidScalene');
            expect(testScalene3.validate()).to.be.undefined;
            expect(testScalene3).to.haveOwnProperty('isValidScalene')
            expect(testScalene3.isValidScalene).to.be.false;
        })

        context('isosceles triangle class', () => {
            testIsosceles1 = new Isosceles(7, 13)
            testIsosceles2 = new Isosceles(7, 15)
            testIsosceles3 = new Isosceles(1, 15)
            it('should extend triangle class and have valid triangle property', () => {
                expect(testIsosceles1).has.ownProperty('side1');
                expect(testIsosceles1).has.ownProperty('side2');
                expect(testIsosceles1).has.ownProperty('side3');
                expect(testIsosceles1).to.have.ownProperty('isValidTriangle');

                expect(testIsosceles1.side1).to.equal(7)
                expect(testIsosceles1.side2).to.equal(7)
                expect(testIsosceles1.side3).to.equal(13)
                expect(testIsosceles1.isValidTriangle).to.be.true;
                expect(testIsosceles2.isValidTriangle).to.be.false;
            })

            it('should have an isIsosceles method', () => {
                expect(testIsosceles1.validate).to.be.a('function');
                expect(testIsosceles1).to.not.haveOwnProperty('isValidIsosceles');
                expect(testIsosceles1.validate()).to.be.undefined;
                expect(testIsosceles1).to.haveOwnProperty('isValidIsosceles')
                expect(testIsosceles1.isValidIsosceles).to.be.true;

                expect(testIsosceles2).to.not.haveOwnProperty('isValidIsosceles');
                expect(testIsosceles2.validate()).to.be.undefined;
                expect(testIsosceles2).to.haveOwnProperty('isValidIsosceles')
                expect(testIsosceles2.isValidIsosceles).to.be.false;

                expect(testIsosceles3).to.not.haveOwnProperty('isValidIsosceles');
                expect(testIsosceles3.validate()).to.be.undefined;
                expect(testIsosceles3).to.haveOwnProperty('isValidIsosceles')
                expect(testIsosceles3.isValidIsosceles).to.be.false;
            })
        })
    })
});
