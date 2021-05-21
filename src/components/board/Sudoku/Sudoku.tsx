import React from "react";
import { SudokuSquare } from "../SudokuSquare/SudokuSquare";
import "./Sudoku.scss";

const mock = [
  [1, 2, 2],
  [3, 4, 2],
  [2, 5, 3],
];

export const Sudoku = () => {
  return (
    <div className="sudoku">
      <div className="sudoku-row">
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
      </div>
      <div className="sudoku-row">
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
      </div>
      <div className="sudoku-row">
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
        <SudokuSquare digits={mock} />
      </div>
    </div>
  );
};
