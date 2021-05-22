import React, { useState } from "react";
import "./SudokuDigit.scss";
import classNames from "classnames";
import { Grow } from "@material-ui/core";
import { DigitPicker } from "../../pickers/DigitPicker/DigitPicker";
import { generateSudokuBoard } from "../../../logic/sudoku/utils";

export const SudokuDigit = ({ digit, position }: Props) => {
  const [isPicking, setIsPicking] = useState(false);
  const renderPicker = () => {
    return (
      <Grow in timeout={250}>
        <div className="sudoku-digit-picker">
          <DigitPicker onPicked={(v) => console.log(generateSudokuBoard())} />
        </div>
      </Grow>
    );
  };

  const renderDigit = () => {
    return <p>{digit}</p>;
  };

  return (
    <button
      type="button"
      // onBlur={() => setTimeout(() => setIsPicking(false), 55)}
      onBlur={() => setIsPicking(false)}
      onFocus={() => setIsPicking(true)}
      className={classNames("sudoku-digit", position)}
    >
      {isPicking && renderPicker()}
      {renderDigit()}
    </button>
  );
};

interface Props {
  digit: number;
  position: Style;
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
