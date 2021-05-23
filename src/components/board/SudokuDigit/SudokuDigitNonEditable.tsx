import classNames from "classnames";
import React from "react";
import { SudokuBoardValue } from "../../../logic/sudoku/types";
import { Position } from "./SudokuDigit";
import "./SudokuDigit.scss";

interface Props {
  digit: SudokuBoardValue;
  position: Position;
}

export const SudokuDigitNonEditable = ({ digit, position }: Props) => {
  const renderDigit = () => {
    return <p>{digit.value}</p>;
  };

  return (
    <button type="button" className={classNames("sudoku-digit", position)}>
      {renderDigit()}
    </button>
  );
};
