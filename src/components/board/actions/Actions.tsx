import React from "react";
import { useSudoku } from "../../../logic/sudoku/useSudoku";
import { Button } from "../../buttons/Button/Button";
import "./Actions.scss";
import { SudokuInput } from "./SudokuInput/SudokuInput";
import { SudokuResult } from "./SudokuResult/SudokuResult";

export const Actions = () => {
  const { reset, validate, result } = useSudoku();
  return (
    <div className="actions">
      <SudokuInput />
      <div className="actions-buttons">
        <Button variant="button-normal" onClick={reset}>
          New game
        </Button>
        <Button variant="button-outlined" onClick={validate}>
          Check solution
        </Button>
      </div>
      <SudokuResult result={result} />
    </div>
  );
};
