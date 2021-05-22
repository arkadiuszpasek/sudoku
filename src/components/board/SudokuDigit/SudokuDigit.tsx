import { Grow } from "@material-ui/core";
import classNames from "classnames";
import React, { useState } from "react";
import { SudokuBoardValue } from "../../../logic/sudoku/types";
import { DigitPicker } from "../../pickers/DigitPicker/DigitPicker";
import "./SudokuDigit.scss";

interface Props {
  digit: SudokuBoardValue;
  position: Style;
  onDigitPicked(value: SudokuBoardValue): void;
}

export const SudokuDigit = ({ digit, position, onDigitPicked }: Props) => {
  const [isPicking, setIsPicking] = useState<boolean>();
  const handlePicked = (value: number | null) => {
    setIsPicking(undefined);
    onDigitPicked(value);
  };
  const renderPicker = () => {
    return (
      <Grow in timeout={250}>
        <div className="sudoku-digit-picker">
          <DigitPicker onPicked={handlePicked} />
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
      onBlur={() => setIsPicking(false)}
      onFocus={() => setIsPicking(true)}
      onClick={isPicking === undefined ? () => setIsPicking(true) : undefined}
      className={classNames("sudoku-digit", position)}
    >
      {isPicking && renderPicker()}
      {renderDigit()}
    </button>
  );
};

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
