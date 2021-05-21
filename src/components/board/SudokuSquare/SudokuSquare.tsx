import React from "react";
import { SudokuDigit } from "../SudokuDigit/SudokuDigit";
import "./SudokuSquare.scss";

export const SudokuSquare = ({ digits }: Props) => {
  return (
    <div className="sudoku-square">
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[0][0]} as="top-left" />
        <SudokuDigit digit={digits[0][1]} as="top-middle" />
        <SudokuDigit digit={digits[0][2]} as="top-right" />
      </div>
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[1][0]} as="center-left" />
        <SudokuDigit digit={digits[1][1]} as="center-middle" />
        <SudokuDigit digit={digits[1][2]} as="center-right" />
      </div>
      <div className="sudoku-square-row">
        <SudokuDigit digit={digits[2][0]} as="bottom-left" />
        <SudokuDigit digit={digits[2][1]} as="bottom-middle" />
        <SudokuDigit digit={digits[2][2]} as="bottom-right" />
      </div>
    </div>
  );
};

interface Props {
  digits: number[][];
}
