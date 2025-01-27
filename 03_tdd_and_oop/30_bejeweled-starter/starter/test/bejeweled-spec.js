const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");
const Cursor = require("../class/cursor.js");

describe ('Bejeweled', function () {

  let grid1;
  let grid2;
  let grid3;
  let grid4;
  let grid5;
  let grid6;
  let grid7;
  let grid8;
  let grid9;
  let grid10;
  let grid11;
  let grid12;

  // Add tests for setting up a basic board
  it('should set an 8x8 grid with no groups of 3 pieces touching', () => {

    grid1 = [["A", "B", "C", "D", "E", "F", "G", "A"],
             ["B", "C", "D", "E", "F", "G", "A", "B"],
             ["B", "C", "D", "E", "F", "G", "A", "B"],
             ["C", "D", "E", "F", "G", "A", "B", "C"],
             ["C", "D", "E", "F", "G", "A", "B", "C"],
             ["A", "B", "C", "D", "E", "F", "G", "A"],
             ["A", "B", "C", "D", "E", "F", "G", "A"],
             ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid2 = [["A", "B", "C", "D", "E", "F", "G", "A"],
             ["B", "C", "D", "E", "F", "G", "A", "B"],
             ["C", "D", "E", "F", "G", "A", "B", "C"],
             ["D", "E", "F", "G", "A", "B", "C", "D"],
             ["E", "F", "G", "A", "B", "C", "D", "E"],
             ["F", "G", "A", "B", "C", "D", "E", "F"],
             ["G", "A", "B", "C", "D", "E", "F", "G"],
             ["A", "B", "C", "D", "E", "F", "G", "A"]]

    grid3 = [["A", "B", "C", "D", "E", "F", "G", "A"],
             ["B", "C", "D", "E", "F", "G", "A", "B"],
             ["C", "D", "E", "F", "G", "A", "B", "C"],
             ["D", "E", "F", "G", "A", "B", "C", "D"],
             ["E", "F", "G", "A", "B", "C", "D", "E"],
             ["F", "G", "A", "B", "C", "D", "E", "F"],
             ["G", "A", "B", "C", "D", "E", "F", "G"],
             ["A", "B", "C", "D", "E", "A", "A", "A"]]

    grid4 = [["A", "B", "C", "D", "E", "F", "G", "A"],
             ["B", "C", "D", "E", "F", "G", "A", "B"],
             ["C", "D", "E", "F", "G", "A", "B", "C"],
             ["D", "E", "F", "G", "A", "B", "C", "D"],
             ["E", "F", "G", "A", "B", "C", "D", "G"],
             ["F", "G", "A", "B", "C", "D", "E", "G"],
             ["G", "A", "B", "C", "D", "E", "F", "G"],
             ["A", "B", "C", "D", "E", "A", "B", "A"]]


    expect(grid1.length).to.equal(8);
    expect(grid1[0].length).to.equal(8);
    expect(Bejeweled.hasMatches(grid1)).to.be.false;
  });

  // Add tests for a valid swap that matches 3
  // it('should detect when a swap results in a 3 match', () => {
  //   let c = new Cursor(8, 8)
  //   c.selectedRow = 0;
  //   c.selectedCol = 0;
  //   c.row = 0;
  //   c.col = 1;

  //   grid5 =  [["A", "B", "C", "D", "E", "F", "G", "A"],
  //             ["B", "C", "D", "E", "F", "G", "A", "B"],
  //             ["B", "C", "D", "E", "F", "G", "A", "B"],
  //             ["C", "D", "E", "F", "G", "A", "B", "C"],
  //             ["C", "D", "E", "F", "G", "A", "B", "C"],
  //             ["A", "B", "C", "D", "E", "F", "G", "A"],
  //             ["A", "B", "C", "D", "E", "F", "G", "A"],
  //             ["B", "C", "D", "E", "F", "G", "A", "B"]]

  //   expect(Bejeweled.hasMatches(Bejeweled.swap(c, grid5))).to.be.true;
  // })

  //matches should make the spaces blank
  //blanks should be filled by the space above
  // Add tests for swaps that set up combos

  it('should check if there are matches of 3s', () => {
    expect(Bejeweled.hasMatches(grid1)).to.be.false;
    expect(Bejeweled.hasMatches(grid2)).to.be.false;
    expect(Bejeweled.hasMatches(grid3)).to.be.true;
    expect(Bejeweled.hasMatches(grid4)).to.be.true;
  });

  it('should remove any match 3s from the grid', () => {

    grid6 =  [["B", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid7 =  [[" ", "A", "C", "D", "E", "F", "G", "A"],
              [" ", "C", "D", "E", "F", "G", "A", "B"],
              [" ", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid8 =  [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["A", "B", "C", "D", "D", "D", "D", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid9 =  [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["A", "B", "C", "D", "E", "F", "G", "A"],
              ["A", "B", "C", " ", " ", " ", " ", " "],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid10 =  [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", "D", "B", "C"],
              ["A", "B", "C", "D", "E", "D", "G", "A"],
              ["A", "B", "C", "D", "D", "D", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid11 =  [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", " ", "B", "C"],
              ["A", "B", "C", "D", "E", " ", "G", "A"],
              ["A", "B", "C", " ", " ", " ", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    expect(Bejeweled.removeMatches(grid6)).to.deep.equal(grid7)
    expect(Bejeweled.removeMatches(grid8)).to.deep.equal(grid9)
    expect(Bejeweled.removeMatches(grid10)).to.deep.equal(grid11)
  });
    //blanks should be filled by the space above

    it("should fill blank spaces by moving pieces down", () => {

    grid12 = [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", "A", "B", "C"],
              ["C", "D", "E", "F", "G", " ", "B", "C"],
              ["A", "B", "C", "D", "E", " ", "E", "A"],
              ["A", "B", "C", " ", " ", " ", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid13 = [["A", "A", "C", "D", "E", "F", "G", "A"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["B", "C", "D", "E", "F", "G", "A", "B"],
              ["C", "D", "E", "F", "G", " ", "B", "C"],
              ["C", "D", "E", "F", "G", " ", "B", "C"],
              ["A", "B", "C", " ", " ", " ", "E", "A"],
              ["A", "B", "C", "D", "E", "A", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

    grid14 = [["A", "A", "C", " ", " ", " ", "G", "A"],
              ["B", "C", "D", "D", "E", " ", "A", "B"],
              ["B", "C", "D", "E", "F", " ", "A", "B"],
              ["C", "D", "E", "E", "F", "F", "B", "C"],
              ["C", "D", "E", "F", "G", "G", "B", "C"],
              ["A", "B", "C", "F", "G", "G", "E", "A"],
              ["A", "B", "C", "D", "E", "A", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]

      expect(Bejeweled.move(grid12)).to.deep.equal(grid13);
      expect(Bejeweled.move(Bejeweled.move(Bejeweled.move(Bejeweled.move(Bejeweled.move(grid13)))))).to.deep.equal(grid14);
    });

    // fill the top row if its empty
    it("should fill the top row with random symbols", () => {

    grid14 = [["A", "A", "C", " ", " ", " ", "G", "A"],
              ["B", "C", "D", "D", "E", " ", "A", "B"],
              ["B", "C", "D", "E", "F", " ", "A", "B"],
              ["C", "D", "E", "E", "F", "F", "B", "C"],
              ["C", "D", "E", "F", "G", "G", "B", "C"],
              ["A", "B", "C", "F", "G", "G", "E", "A"],
              ["A", "B", "C", "D", "E", "A", "G", "D"],
              ["B", "C", "D", "E", "F", "G", "A", "B"]]


      expect(Bejeweled.fillTop(grid14, "ABCDEFG")[0].includes(" ")).to.be.false;
    });
    // Add tests for swaps that set up combos


});
