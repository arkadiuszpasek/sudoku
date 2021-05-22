import React, { useState } from "react";
import { SudokuBoard } from "./types";
import { generateSudokuBoard } from "./utils";

interface SudokuHook {
  board: SudokuBoard;
  updateSquare(
    squareRow: number,
    squareCol: number,
    digitRow: number,
    digitCol: number,
    value: number | null
  ): void;
  reset(): void;
}

const useSudokuBoard = (): SudokuHook => {
  const [board, setBoard] = useState<SudokuBoard>(generateSudokuBoard());

  const updateSquare = (
    squareRow: number,
    squareCol: number,
    digitRow: number,
    digitCol: number,
    value: number | null
  ) => {
    setBoard(
      board.map((squaresR, squareRowIdx) => {
        if (squareRowIdx !== squareRow) {
          return squaresR;
        }

        return squaresR.map((squareC, squareIdx) => {
          if (squareCol !== squareIdx) {
            return squareC;
          }

          return squareC.map((digitR, digitRowIdx) => {
            if (digitRowIdx !== digitRow) {
              return digitR;
            }

            return digitR.map((digit, i) => {
              if (i !== digitCol) {
                return digit;
              }

              return value;
            });
          });
        });
      })
    );
  };

  const reset = () => {
    setBoard(generateSudokuBoard());
  };

  return {
    board,
    updateSquare,
    reset,
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
