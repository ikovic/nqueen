const getInitialBoard = function getInitialBoard(boardSize, { x, y }) {
  const board = [];

  for (let rowIdx = 0; rowIdx < boardSize; rowIdx++) {
    board.push([]);
    for (let colIdx = 0; colIdx < boardSize; colIdx++) {
      board[rowIdx].push(x === rowIdx && y === colIdx ? 1 : 0);
    }
  }

  return board;
};

const solveQueensProblem = function solveQueensProblem(board, availableFields, queens) {
  const positionedQueens = queens.length;
  const boardSize = board.length;

  if (positionedQueens === boardSize) {
    return board;
  }

  return board;
};

export { getInitialBoard, solveQueensProblem };
