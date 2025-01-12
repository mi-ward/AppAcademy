const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
    const word = new Word("word");

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const prop = word.hasOwnProperty('word');
      expect(prop).to.be.true;

    });

    it('should set the "word" property when a new word is created', function () {
      const wordProperty = word.word;

      expect(wordProperty).to.eql('word');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const wrd = word.removeVowels();

      expect(wrd).to.eq('wrd');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const o = word.removeConsonants();

      expect(o).to.eq('o');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const ordway = word.pigLatin();
      const ord = new Word("ord")
      const ordyay = ord.pigLatin();


      expect(ordway).to.eq('ordway');
      expect(ordyay).to.eq('ordyay');
    });
  });
});
