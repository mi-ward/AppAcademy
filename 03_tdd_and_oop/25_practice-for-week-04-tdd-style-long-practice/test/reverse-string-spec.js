const { expect } = require('chai');
const reverseString = require('../problems/reverse-string.js')

describe('reverseString', function() {
    describe('reversing a string', function() {
        it('should return the string reversed', function () {
            expect(reverseString("fun")).to.be.equal("nuf");
        })
    })

    describe('reversing a string type errors', function() {
        it('should throw a TypeError if the input is not a string', function () {
            expect(() => (reverseString(123))).to.throw(TypeError);
        })
    })
});
