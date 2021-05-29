import { flatten } from "lodash";
import { SudokuBoard, SudokuBoardValue, SudokuValidationResult, ValidationResult } from "../types";
import { getColumn, getSquare } from "./utils";

const collidesIn = (
  sudokuValue: SudokuBoardValue,
  arr: SudokuBoardValue[]
): boolean => {
  if (!sudokuValue.value) {
    return true;
  }

  return arr.filter((el) => el.value === sudokuValue.value).length !== 1;
};

export const validateSudoku = (board: SudokuBoard): ValidationResult => {
  const validatedBoard = board.map((digitRow, digitRowIdx) => {
    return digitRow.map((digitValue, digitValueIdx) => {
      if (!digitValue.isEditable) {
        return digitValue;
      }
      if (!digitValue.value) {
        return { ...digitValue, hasError: true };
      }
      const column = getColumn(board, digitValueIdx);
      const square = flatten(getSquare(board, digitRowIdx, digitValueIdx));

      const hasRowCollision = collidesIn(digitValue, digitRow);
      const hasColumnCollision = collidesIn(digitValue, column);
      const hasSquareCollision = collidesIn(digitValue, square);

      return {
        ...digitValue,
        hasError: hasSquareCollision || hasRowCollision || hasColumnCollision,
      };
    });
  });

  const anyHasError = validatedBoard.find((row) =>
    row.find((el) => el.hasError)
  );

  return {
    board: validatedBoard,
    result: anyHasError
      ? SudokuValidationResult.Incorrect
      : SudokuValidationResult.Correct,
  };
};
