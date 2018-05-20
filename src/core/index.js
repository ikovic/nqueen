const getInitialBoard = function getInitialBoard(boardSize, { x, y }) {
  const board = [];

  for (let rowIdx = 0; rowIdx < boardSize; rowIdx++) {
    board.push([]);
    for (let colIdx = 0; colIdx < boardSize; colIdx++) {
      board[rowIdx].push(x === rowIdx && y === colIdx ? boardSize : 0);
    }
  }

  return board;
};

const isQueenSafe = function isQueenSafe(board, { x, y }) {
  const boardSize = board.length;
  //checking if there is a queen in row or column
  for (let k = 0; k < boardSize; k++) {
    if (board[x][k] !== 0 || board[k][y] !== 0) {
      return false;
    }
  }
  //checking for diagonals
  for (let k = 0; k < boardSize; k++) {
    for (let l = 0; l < boardSize; l++) {
      if (k + l === x + y || k - l === x - y) {
        if (board[k][l] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

const solveQueensProblem = function solveQueensProblem(board, nOfQueens) {
  const boardSize = board.length;

  if (nOfQueens === 0) {
    return board;
  }

  for (let rowIdx = 0; rowIdx < boardSize; rowIdx++) {
    for (let colIdx = 0; colIdx < boardSize; colIdx++) {
      if (isQueenSafe(board, { x: rowIdx, y: colIdx }) && !board[rowIdx][colIdx]) {
        board[rowIdx][colIdx] = nOfQueens;
        const nextStep = solveQueensProblem(board, nOfQueens - 1);
        if (nextStep) {
          return board;
        } else {
          board[rowIdx][colIdx] = 0;
        }
      }
    }
  }

  return false;
};

export { getInitialBoard, solveQueensProblem };
