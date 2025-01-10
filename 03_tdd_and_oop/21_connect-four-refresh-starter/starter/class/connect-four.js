const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('up', 'move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('space', 'place piece', this.place.bind(this, this.cursor));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  place(cursor) {
    for (let i = cursor.numRows-1; i >= 0; i--) {
      let val = this.grid[i][cursor.col];
      if (val === " ") {
        this.grid[i][cursor.col] = this.playerTurn
        Screen.setGrid(i, cursor.col, this.playerTurn)
        if (this.playerTurn === "O") {
          this.playerTurn = "X"
        } else {
          this.playerTurn = "O"
        }
        let winner = ConnectFour.checkWin(this.grid);
        if (winner) {
          ConnectFour.endGame(winner);
        }
        Screen.render()
        return;
      }
    }
  }

  static checkWin(grid) {

    function horizontalWins(grid) {
      let winner = false;
      grid.forEach((row) => {
        for (let i = 0; i <= row.length - 4; i++) {
          if (row.slice(i,i+4).join("") === "XXXX") {
            winner = "X"
          } else if (row.slice(i,i+4).join("") === "OOOO") {
            winner = "O"
          }
        }
      });
      return winner;
    }

    function verticalWins(grid) {
      let winner = false;
      for (let i = 0; i < grid[0].length; i++) {
        let row = []
        for (let j = 0; j < grid.length; j++) {
          row.push(grid[j][i])
        }
        if (row.join("").includes("XXXX")) {
          winner = "X"
        } else if (row.join("").includes("OOOO")) {
          winner = "O"
        }
      }
      return winner;
    }

    function diagonalWins1(grid) {
      let winner = false;
      for (let i = 0; i <= grid.length-4; i++) {
        for (let j = 0; j <= grid[0].length-4; j++) {
          let row = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2] + grid[i+3][j+3]

          if (row === "XXXX") {
            winner = "X"
          } else if (row === "OOOO") {
            winner = "O"
          }
        }
      }
      return winner;
    }

    function diagonalWins2(grid) {
      let winner = false;
      for (let i = 0; i <= grid.length - 4; i++) {
        for (let j = grid[0].length - 1; j >= 3; j--) {
          let row = grid[i][j] + grid[i+1][j-1] + grid[i+2][j-2] + grid[i+3][j-3]
          if (row === "XXXX") {
            winner = "X"
          } else if (row === "OOOO") {
            winner = "O"
          }
        }
      }
      return winner;
    }


    function tieGame(grid) {
      let winner = "T";
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === " ") {
            winner = false;
          }
        }
      }
      return winner;
    }

    let hor = horizontalWins(grid)
    let ver = verticalWins(grid)
    let di1 = diagonalWins1(grid)
    let di2 = diagonalWins2(grid)
    let tie = tieGame(grid)

    if (hor) {
      return hor;
    } else if (ver) {
      return ver;
    } else if (di1) {
      return di1;
    } else if (di2) {
      return di2
    } else if (tie) {
      return tie;
    } else {
      return false;
    }
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

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

module.exports = ConnectFour;
