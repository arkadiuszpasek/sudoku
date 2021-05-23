import classNames from "classnames";
import React from "react";
import { SudokuValidationResult } from "../../../../logic/sudoku/types";
import "./SudokuResult.scss";

interface Props {
  result?: SudokuValidationResult;
}
export const SudokuResult = ({ result }: Props) => {
  const renderText = (): string => {
    return result === SudokuValidationResult.Correct
      ? "Leapin' lizards! Sudoku is correct"
      : "Son of a biscuit, something's wrong";
  };

  return (
    <div
      className={classNames("sudoku-result", {
        "sudoku-result-showing": result !== undefined,
        "sudoku-result-danger": result === SudokuValidationResult.Incorrect,
        "sudoku-result-success": result === SudokuValidationResult.Correct,
      })}
    >
      {result && renderText()}
    </div>
  );
};
