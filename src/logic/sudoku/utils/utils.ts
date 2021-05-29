import {
  SudokuBoard,
  SudokuBoardValue
} from "../types";

export const getColumn = (board: SudokuBoard, idx: number): SudokuBoardValue[] => {
  return board.map((row) => row[idx]);
};

export const getSquareBySquareIdx = (
  board: SudokuBoard,
  squareRowIdx: number,
  squareColIdx: number
): SudokuBoardValue[][] => {
  const rows = board.slice(squareRowIdx * 3, squareRowIdx * 3 + 3);
  return rows.map((row) => row.slice(squareColIdx * 3, squareColIdx * 3 + 3));
};

export const getSquare = (
  board: SudokuBoard,
  digitRowIdx: number,
  digitColIdx: number
): SudokuBoardValue[][] => {
  const squareRowIdx = Math.floor(digitRowIdx / 3);
  const squareColIdx = Math.floor(digitColIdx / 3);

  return getSquareBySquareIdx(board, squareRowIdx, squareColIdx);
};





