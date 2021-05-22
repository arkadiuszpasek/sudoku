import React from "react";
import { SudokuDigit } from "../SudokuDigit/SudokuDigit";
import "./SudokuSquare.scss";

export const SudokuSquare = ({ digits }: Props) => {
  return (
    <div className="sudoku-square">
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[0][0]} position="top-left" />
        <SudokuDigit digit={digits[0][1]} position="top-middle" />
        <SudokuDigit digit={digits[0][2]} position="top-right" />
      </div>
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[1][0]} position="center-left" />
        <SudokuDigit digit={digits[1][1]} position="center-middle" />
        <SudokuDigit digit={digits[1][2]} position="center-right" />
      </div>
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[2][0]} position="bottom-left" />
        <SudokuDigit digit={digits[2][1]} position="bottom-middle" />
        <SudokuDigit digit={digits[2][2]} position="bottom-right" />
      </div>
    </div>
  );
};

interface Props {
  digits: number[][];
}
