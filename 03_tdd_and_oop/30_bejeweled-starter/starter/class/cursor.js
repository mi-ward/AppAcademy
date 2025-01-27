const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.selectedCol = 0;
    this.selectedRow = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';
    this.selectColor = 'black';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  resetSelectBackgroundColor() {
    Screen.setBackgroundColor(this.selectedRow, this.selectedCol, "black")
  }

  setSelectBackgroundColor() {
    Screen.setBackgroundColor(this.selectedRow, this.selectedCol, this.selectColor);
  }

  up() {
    this.resetBackgroundColor()
    this.setSelectBackgroundColor();
    this.row - 1 < 0 ? this.row : this.row -= 1
    this.setBackgroundColor();
    Screen.render();
  }

  down() {
    this.resetBackgroundColor()
    this.setSelectBackgroundColor();
    this.row + 1 >= this.numRows ? this.row : this.row += 1
    this.setBackgroundColor();
    Screen.render();
  }

  left() {
    this.resetBackgroundColor()
    this.setSelectBackgroundColor();
    this.col - 1 < 0 ? this.col : this.col -= 1
    this.setBackgroundColor();
    Screen.render();
  }

  right() {
    this.resetBackgroundColor()
    this.setSelectBackgroundColor();
    this.col + 1 >= this.numCols ? this.col : this.col += 1
    this.setBackgroundColor()
    Screen.render()
  }


  select() {
    this.resetSelectBackgroundColor()
    this.selectedRow = this.row
    this.selectedCol = this.col
    this.selectColor = 'red';
    this.setSelectBackgroundColor();
    Screen.render()
  }
}


module.exports = Cursor;
