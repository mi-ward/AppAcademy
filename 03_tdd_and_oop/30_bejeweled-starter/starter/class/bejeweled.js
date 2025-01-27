const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [];
    this.dimension = 8;
    this.symbols = "ABCDEFG";
    this.score = 0;

    for (let i = 0; i < this.dimension; i++) {
      let row = [];
      for (let j = 0; j < this.dimension; j++) {
        if (i >= 2) {
          if (this.grid[i - 1][j] === this.grid[i - 2][j]) {
            this.symbols = this.symbols.split(this.grid[i - 1][j]).join("");
          }
        }

        if (j >= 2) {
          if (row[j - 1] === row[j - 2]) {
            this.symbols = this.symbols.split(row[j - 1]).join("");
          }
        }

        let randomIdx = Math.floor(Math.random() * this.symbols.length)
        row.push(this.symbols[randomIdx]);
        this.symbols = "ABCDEFG";
      }
      this.grid.push(row);
    }
    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);
    this.grid.forEach((row, idx1) => {
      row.forEach((sym, idx2) => {
        Screen.setGrid(idx1, idx2, sym);
      });
    });

    this.cursor.setBackgroundColor();
    Screen.addCommand('up', 'up', this.cursor.up.bind(this.cursor))
    Screen.addCommand('down', 'down', this.cursor.down.bind(this.cursor))
    Screen.addCommand('left', 'left', this.cursor.left.bind(this.cursor))
    Screen.addCommand('right', 'right', this.cursor.right.bind(this.cursor))
    Screen.addCommand('space', 'select', this.cursor.select.bind(this.cursor))
    Screen.addCommand('return', 'swap', Bejeweled.swap.bind(this, this.cursor, this.grid));
    Screen.render();
  }

  static combineRowsAndColumns(grid) {
    let rowsAndCols = [];
    grid.forEach((row) => {
      rowsAndCols.push(row);
    });

    for (let col = 0; col < grid[0].length; col++) {
      let cols = [];
      for (let row = 0; row < grid.length; row++) {
        cols.push(grid[row][col])
      }
      rowsAndCols.push(cols);
    }
    return rowsAndCols;
  }

  static rebuildGrid(rowsAndColumns) {
    let racCount = rowsAndColumns.length / 2;
    let grid = [];
    for (let rows = 0; rows < racCount; rows++) {
      grid.push(rowsAndColumns[rows]);
      }

    for (let cols = racCount; cols < rowsAndColumns.length; cols++) {
      for (let row = 0; row < rowsAndColumns[cols].length; row++) {

        if (grid[row][cols-racCount] !== rowsAndColumns[cols][row]) {
          grid[row][cols-racCount] = " ";
        }
      }
    }
    return grid;
  }

  static hasMatches(grid) {
    let rowsAndCols = Bejeweled.combineRowsAndColumns(grid);
    //check each row and col for a triple
    let hasMatch = false;
    rowsAndCols.forEach((rac) => {
      for (let idx = 2; idx < rac.length; idx++) {
        if ((rac[idx] === rac[idx - 1]) && (rac[idx] === rac[idx - 2])) {
          hasMatch = true;
        }
      }
    })
    return hasMatch;
  }

  static removeMatches(grid) {
    let rowsAndCols = Bejeweled.combineRowsAndColumns(grid);

    rowsAndCols.forEach((rac) => {
      for (let idx = 2; idx < rac.length; idx++) {
        if ((rac[idx] === rac[idx - 1]) && (rac[idx] === rac[idx - 2])) {

          if ((idx < rac.length-1) && (rac[idx] === rac[idx + 1])) {
            if ((idx < rac.length -2) && (rac[idx] === rac[idx + 2])) {
              rac[idx + 2] = " "
            }
              rac[idx + 1] = " "
          }

          [rac[idx], rac[idx - 1], rac[idx - 2]] = [" ", " ", " "]
        }
      }
    });
    grid = Bejeweled.rebuildGrid(rowsAndCols);

    return grid;
  }

  static move(grid) {
    let rowLength = grid[0].length
    for (let row = 1; row < grid.length; row++) {
      for (let col = 0; col < rowLength; col++) {
        if (grid[row][col] === " ") {
          grid[row][col] = grid[row - 1][col];
          grid[row - 1][col] = " "
        }
      }
    }
    return grid;
  }

  static fillTop(grid, symbols="ABCDEFG") {
    for (let i = 0; i < grid[0].length; i++) {
      if (grid[0][i] === " ") {
        let randomIdx = Math.floor(Math.random() * symbols.length)
        grid[0][i] = symbols[randomIdx]
      }
    }
    return grid;
  }

  static swap(cursor, grid) {
    this.score += 10
    let oldRow = cursor.selectedRow;
    let oldCol = cursor.selectedCol;
    let row = cursor.row;
    let col = cursor.col;
    let one = grid[row][col]
    let two = grid[oldRow][oldCol]

    if (((Math.abs(row - oldRow) === 1) && (Math.abs(col - oldCol) === 0)) ||
      ((Math.abs(row - oldRow) === 0) && (Math.abs(col - oldCol) === 1))) {

      grid[row][col] = two;
      grid[oldRow][oldCol] = one;

      if (Bejeweled.hasMatches(grid)) {
        Screen.setGrid(row, col, two)
        Screen.setGrid(oldRow, oldCol, one)
      } else {
        grid[row][col] = one;
        grid[oldRow][oldCol] = two;
      }
    }

    cursor.resetSelectBackgroundColor();
    cursor.selectColor = "black"
    // Screen.setMessage(this.grid);
    // Screen.setMessage(Bejeweled.hasMatches(this.grid))
    while ((Bejeweled.hasMatches(grid)) || Bejeweled.hasEmpties(grid)) {
      this.score += 10
      Bejeweled.removeMatches(grid)
      Bejeweled.move(grid)
      Bejeweled.fillTop(grid)
      //Screen.setMessage(this.grid);
    }
    this.grid = grid;
    Bejeweled.renderGrid(this.grid);
    Screen.setMessage(this.score);
    Screen.render()

    return grid;
  }

  static hasEmpties(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === " ") {
          return true;
        }
      }
    }
    return false;
  }

  static renderGrid(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        Screen.setGrid(row, col, grid[row][col]);
      }
    }
    Screen.render();
  }

}

module.exports = Bejeweled;
