const { expect } = require('chai');
const { returnsThree, reciprocal } = require("../problems/number-fun.js");

describe("testing number functions", function() {
    describe("returns three", function() {
        it("should return 3 when no argument is provided", function() {
            expect(returnsThree()).to.be.equal(3);
        })
        it("should return 3 when a number is provided", function() {
            expect(returnsThree(1000)).to.be.equal(3);
        })
    })

    describe("reciprocal testing", () => {
        context('when value between 1 and 1000000', () => {
            it("should return 1/x of x", () => {
                expect(reciprocal(1)).to.be.equal(1);
                expect(reciprocal(5)).to.be.equal(1/5);
                expect(reciprocal(1000000)).to.be.equal(1/1000000);
           })
        })

        context('when value not between 1 and 10000000', () => {
            it("should return an error", () => {
                expect(() => {reciprocal(0)}).to.throw(TypeError, "Number must be between 1-1000000");
                expect(() => {reciprocal(1000001)}).to.throw(TypeError, "Number must be between 1-1000000");
                expect(() => {reciprocal(1/3)}).to.throw(TypeError, "Number must be between 1-1000000");
           })
        })
    })


})
