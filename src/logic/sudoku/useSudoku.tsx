import React, { useState } from "react";
import {
  SudokuBoard,
  SudokuBoardValue,
  SudokuHook,
  SudokuValidationResult,
} from "./types";
import { generateSudoku, validateSudoku } from "./utils";

const useSudokuBoard = (): SudokuHook => {
  const [board, setBoard] = useState<SudokuBoard>(generateSudoku());
  const [result, setResult] = useState<SudokuValidationResult>();

  const updateSquare = (
    digitRowIdx: number,
    digitColIdx: number,
    value: SudokuBoardValue["value"]
  ) => {
    setBoard(
      board.map((digitR, digitRIdx) => {
        if (digitRIdx !== digitRowIdx) {
          return digitR;
        }

        return digitR.map((digitValue, digitIdx) => {
          if (digitIdx !== digitColIdx) {
            return digitValue;
          }

          return { ...digitValue, value };
        });
      })
    );
  };

  const reset = () => {
    setBoard(generateSudoku());
    setResult(undefined);
  };

  const validate = () => {
    const validation = validateSudoku(board);
    setBoard(validation.board);
    setResult(validation.result);
  };

  return {
    board,
    setBoard,
    updateSquare,
    reset,
    validate,
    result,
  };
};

const SudokuContext = React.createContext<SudokuHook | undefined>(undefined);
export const SudokuProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const sudoku = useSudokuBoard();

  return (
    <SudokuContext.Provider value={sudoku}>{children}</SudokuContext.Provider>
  );
};

export const useSudoku = (): SudokuHook => {
  const sudoku = React.useContext(SudokuContext);

  if (!sudoku) {
    throw new Error("useSudoku must be used within SudokuProvider");
  }

  return sudoku;
};
