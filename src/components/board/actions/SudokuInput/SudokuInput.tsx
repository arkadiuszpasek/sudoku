import { Icon } from "@material-ui/core";
import classNames from "classnames";
import React, { useState } from "react";
import { useSudoku } from "../../../../logic/sudoku/useSudoku";
import { parseJsonStringToBoard } from "../../../../logic/sudoku/utils";
import { Button } from "../../../buttons/Button/Button";
import { TextInput } from "../../../inputs/TextInput/TextInput";
import "./SudokuInput.scss";

export const SudokuInput = () => {
  const { setBoard } = useSudoku();
  const [isInteracting, setIsInteracting] = useState(false);
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
    setIsInteracting(false);
  };

  const handleSubmit = () => {
    const board = parseJsonStringToBoard(value);
    if (board) {
      setBoard(board);
    }
  };

  return (
    <div className="sudoku-input">
      <Button
        variant="button-outlined"
        onClick={() => setIsInteracting(!isInteracting)}
      >
        Start a custom game
      </Button>
      <div
        className={classNames("sudoku-input-area", {
          "sudoku-input-area-active": isInteracting,
        })}
      >
        <TextInput
          value={value}
          onChange={setValue}
          placeholder={`"[1,null,5,..],[3,...],...]"`}
        />
        <i onClick={handleSubmit}>
          <Icon>done</Icon>
        </i>
        <i onClick={reset}>
          <Icon>close</Icon>
        </i>
      </div>
    </div>
  );
};
