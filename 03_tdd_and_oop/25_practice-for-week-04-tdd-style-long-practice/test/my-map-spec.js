const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map.js');


describe ("testing map function", () => {
    let arr;
    let plusOne = n => n+1;

    beforeEach(() => {
        arr = [1,2,3]
    })

    describe("map applies callback to initial array", () => {
        it("should create a new array based on cb and the supplied array", () => {

            expect(myMap(arr, plusOne)).to.be.eql([2,3,4])
        })
        it("should not mutate the original array", () => {
            let varr = myMap(arr, plusOne);
            expect(arr).to.be.eql([1,2,3]);
            expect(varr).to.be.eql([2,3,4]);
        })
        it("should not use the built-in Array map method", () => {
            expect(chai.spy.on(Array, 'map')).to.not.be.called();
        })
        it("should ensure that the passed-in callback is invoked once for each element in the passed-in array argument.", () => {
            arr.map((val) => expect(chai.spy(val)).to.be.spy);
        })
    })
})
