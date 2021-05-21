import React from "react";
import "./SudokuDigit.scss";
import classNames from "classnames";

export const SudokuDigit = ({ digit, as: style }: Props) => {
  return <div className={classNames("sudoku-digit", style)}>{digit}</div>;
};

interface Props {
  digit: number;
  as: Style;
}
type Style =
  | "top-left"
  | "top-middle"
  | "top-right"
  | "center-left"
  | "center-middle"
  | "center-right"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";
