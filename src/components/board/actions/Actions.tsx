import React from "react";
import { useSudoku } from "../../../logic/sudoku/useSudoku";
import { Button } from "../../buttons/Button/Button";
import "./Actions.scss";

export const Actions = () => {
  const { reset } = useSudoku();
  return (
    <div className="actions">
      <Button variant="button-normal" onClick={reset}>
        New game
      </Button>
      <Button variant="button-outlined">Check solution</Button>
    </div>
  );
};
