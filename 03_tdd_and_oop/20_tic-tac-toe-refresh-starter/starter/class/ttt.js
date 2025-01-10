const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Initial cursor color
    this.cursor.setBackgroundColor();

    // Replace this with real commands
    Screen.addCommand('up', 'move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('space', 'place X or O', this.place.bind(this, this.cursor, this.grid));


    Screen.render();
  }

  place(cursor) {

    if (this.playerTurn === "O") {
      this.grid[cursor.row][cursor.col] = "O"
      Screen.setTextColor(cursor.row, cursor.col, "white")
      Screen.setGrid(cursor.row, cursor.col, "O")
      this.playerTurn = "X"
      Screen.render()
    } else {
      this.grid[cursor.row][cursor.col] = "X"
      Screen.setTextColor(cursor.row, cursor.col, "red")
      Screen.setGrid(cursor.row, cursor.col, "X")
      this.playerTurn = "O"
      Screen.render()
    }
    if (TTT.checkWin(this.grid)) {
      TTT.endGame(TTT.checkWin(this.grid));
    }
  }

  static checkWin(grid) {
    console.log("checking...")
    let one   = grid[0][0]
    let two   = grid[0][1]
    let three = grid[0][2]
    let four  = grid[1][0]
    let five  = grid[1][1]
    let six   = grid[1][2]
    let seven = grid[2][0]
    let eight = grid[2][1]
    let nine  = grid[2][2]

    let board = [one, two, three, four, five, six, seven, eight, nine];

    let horizontals = [ [one, two, three],
                        [four, five, six],
                        [seven, eight, nine]]

    let verticals   = [ [one, four, seven],
                        [two, five, eight],
                        [three, six, nine]]
    let diagonals  =  [ [one, five, nine], [three,five,seven]];

    let winConditions = [...horizontals, ...verticals, ...diagonals]

    let winner = false;
    winConditions.forEach((row) => {
      if (row.every( cell => cell === "X")) {
        winner = "X";
      } else if (row.every( cell => cell === "O")) {
        winner = "O"
      }
    });

    if (winner) {
      return winner;
    } else if (board.includes(" ")) {
      return false;
    } else {
      return "T"
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
