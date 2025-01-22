const TTT = require('./ttt');

class ComputerPlayer {

  static getValidMoves(grid) {
    let validMoves = []
    grid.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        let move = {};
        move.row = rowIdx;
        move.col = colIdx;
        if (col === " ") {
          validMoves.push(move);
        }
      });
    });
    return validMoves;
  }

  static randomMove(grid) {
    let validMoves = ComputerPlayer.getValidMoves(grid);
    let availableMoveCount = validMoves.length
    let randomValidMoveIdx = Math.floor(Math.random() * availableMoveCount);

    return validMoves[randomValidMoveIdx];
  }

  static getWinningMoves(grid, symbol) {
    let winningMoves = [];
    let validMoves = ComputerPlayer.getValidMoves(grid);

    validMoves.forEach((move) => {
      let tempGrid = []

      grid.forEach((row) => {
        let newRow = []
        row.forEach((col) => {
          newRow.push(col);
        });
        tempGrid.push(newRow)
      });

      tempGrid[move.row][move.col] = symbol;
      if (ComputerPlayer.checkWin(tempGrid)) {
        winningMoves.push(move);
      }
    });
    return winningMoves;
  }

  static getSmartMove(grid, symbol) {
    let oppSymbol;
    if (symbol === "X") {
      oppSymbol = "O";
    } else {
      oppSymbol = "X";
    }
    let winningMoves = ComputerPlayer.getWinningMoves(grid, symbol);
    let losingMoves = ComputerPlayer.getWinningMoves(grid, oppSymbol);

    if (winningMoves.length > 0) {
      return winningMoves[0];
    }

    if (losingMoves.length > 0) {
      return losingMoves[0];
    }

    return ComputerPlayer.randomMove(grid);
  }

  static checkWin(grid) {
    //console.log("checking...")
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

}

module.exports = ComputerPlayer;


// let grid = [["X", "X", " "],
//             ["O", " ", " "],
//             ["O", " ", " "]]
// console.log(ComputerPlayer.getWinningMoves(grid, "X"));
