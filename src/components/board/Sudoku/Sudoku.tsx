import React from "react";
import { useSudoku } from "../../../logic/sudoku/useSudoku";
import { SudokuSquare } from "../SudokuSquare/SudokuSquare";
import "./Sudoku.scss";

export const Sudoku = () => {
  const { board, updateSquare } = useSudoku();

  const renderSquare = (rowIdx: number, colIdx: number) => {
    return (
      <SudokuSquare
        digits={board[rowIdx][colIdx]}
        onDigitPicked={(rIdx, cIdx, value) =>
          updateSquare(rowIdx, colIdx, rIdx, cIdx, value)
        }
      />
    );
  };
  return (
    <div className="sudoku">
      <div className="sudoku-row">
        {renderSquare(0, 0)}
        {renderSquare(0, 1)}
        {renderSquare(0, 2)}
      </div>
      <div className="sudoku-row">
        {renderSquare(1, 0)}
        {renderSquare(1, 1)}
        {renderSquare(1, 2)}
      </div>
      <div className="sudoku-row">
        {renderSquare(2, 0)}
        {renderSquare(2, 1)}
        {renderSquare(2, 2)}
      </div>
    </div>
  );
};
