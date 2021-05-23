import React from "react";
import { SudokuBoardValue } from "../../../logic/sudoku/types";
import { SudokuDigit } from "../SudokuDigit/SudokuDigit";
import { SudokuDigitNonEditable } from "../SudokuDigit/SudokuDigitNonEditable";
import "./SudokuSquare.scss";

interface Props {
  /** 3x3 array of sudoku values */
  sudokuValues: SudokuBoardValue[][];
  onDigitPicked(
    rowIdx: number,
    colIdx: number,
    value: SudokuBoardValue["value"]
  ): void;
}

export const SudokuSquare = ({ sudokuValues, onDigitPicked }: Props) => {
  const renderDigit = (
    rowIdx: number,
    colIdx: number,
    position: React.ComponentProps<typeof SudokuDigit>["position"]
  ) => {
    const value = sudokuValues[rowIdx][colIdx];
    if (!value.isEditable) {
      return <SudokuDigitNonEditable digit={value} position={position} />;
    }
    return (
      <SudokuDigit
        digit={sudokuValues[rowIdx][colIdx]}
        position={position}
        onDigitPicked={(v) => onDigitPicked(rowIdx, colIdx, v)}
      />
    );
  };
  return (
    <div className="sudoku-square">
      <div className="sudoku-square-row">
        {renderDigit(0, 0, "top-left")}
        {renderDigit(0, 1, "top-middle")}
        {renderDigit(0, 2, "top-right")}
      </div>
      <div className="sudoku-square-row">
        {renderDigit(1, 0, "center-left")}
        {renderDigit(1, 1, "center-middle")}
        {renderDigit(1, 2, "center-right")}
      </div>
      <div className="sudoku-square-row">
        {renderDigit(2, 0, "bottom-left")}
        {renderDigit(2, 1, "bottom-middle")}
        {renderDigit(2, 2, "bottom-right")}
      </div>
    </div>
  );
};
