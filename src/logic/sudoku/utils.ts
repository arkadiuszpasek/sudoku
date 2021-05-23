import { flatten, random, range, shuffle } from "lodash";
import { config } from "../../config/config";
import { Logger } from "../logger";
import {
  SudokuBoard,
  SudokuBoardValue,
  SudokuValidationResult,
  ValidationResult,
} from "./types";

const shiftRowBySquare = (row: number[]): number[] => {
  const [f, s, t, ...rest] = row;
  return [...rest, f, s, t];
};
const shiftRowByColumn = (row: number[]): number[] => {
  const [f, ...rest] = row;
  return [...rest, f];
};
const collidesIn = (
  sudokuValue: SudokuBoardValue,
  arr: SudokuBoardValue[]
): boolean => {
  if (!sudokuValue.value) {
    return true;
  }

  return arr.filter((el) => el.value === sudokuValue.value).length !== 1;
};
const getColumn = (board: SudokuBoard, idx: number): SudokuBoardValue[] => {
  return board.map((row) => row[idx]);
};
export const getSquareBySquareIdx = (
  board: SudokuBoard,
  squareRowIdx: number,
  squareColIdx: number
): SudokuBoardValue[][] => {
  const rows = board.slice(squareRowIdx * 3, squareRowIdx * 3 + 3);
  return rows.map((row) => row.slice(squareColIdx * 3, squareColIdx * 3 + 3));
};

export const getSquare = (
  board: SudokuBoard,
  digitRowIdx: number,
  digitColIdx: number
): SudokuBoardValue[][] => {
  const squareRowIdx = Math.floor(digitRowIdx / 3);
  const squareColIdx = Math.floor(digitColIdx / 3);

  return getSquareBySquareIdx(board, squareRowIdx, squareColIdx);
};
export const parseJsonStringToBoard = (
  json: string
): SudokuBoard | undefined => {
  try {
    const arr = JSON.parse(json.replace(/[\s"]/g, "")) as (number | null)[][];
    if (!(arr instanceof Array) || !(arr[0] instanceof Array)) {
      Logger.warn("Received input is not a correct array", arr, json);

      return undefined;
    }

    if (arr.length !== 9 || !!arr.find((row) => row.length !== 9)) {
      Logger.warn("Received input array is not of correct shape", arr, json);

      return undefined;
    }

    if (
      arr.find((row) =>
        row.find((el) => {
          return el && typeof el !== "number";
        })
      )
    ) {
      Logger.warn("Received input has illegal values", arr, json);

      return undefined;
    }

    return arr.map((row) =>
      row.map((el) => ({
        value: el,
        isEditable: !el,
      }))
    );
  } catch (e) {
    Logger.warn("Couldn't parse input to sudoku board", e, json);

    return undefined;
  }
};

const hideValues = (rows: SudokuBoardValue[][]): SudokuBoardValue[][] => {
  const value = rows.map((row) => [
    ...row.map((val) => ({ value: val.value, isEditable: false })),
  ]);
  for (let i = 0; i < config.sudokuHideRowsNumber; i += 1) {
    const rowIdx = random(0, 8);
    const colIdx = random(0, 8);

    value[rowIdx][colIdx] = { value: null, isEditable: true };
  }

  return value;
};

export const generateRows = (): SudokuBoardValue[][] => {
  const firstRow = shuffle(range(1, 10));
  const secondRow = shiftRowBySquare(firstRow);
  const thirdRow = shiftRowBySquare(secondRow);

  const fourthRow = shiftRowByColumn(thirdRow);
  const fifthRow = shiftRowBySquare(fourthRow);
  const sixthRow = shiftRowBySquare(fifthRow);

  const seventhRow = shiftRowByColumn(sixthRow);
  const eighthRow = shiftRowBySquare(seventhRow);
  const ninthRow = shiftRowBySquare(eighthRow);

  return flatten(
    shuffle([
      [firstRow, secondRow, thirdRow],
      [fourthRow, fifthRow, sixthRow],
      [seventhRow, eighthRow, ninthRow],
    ])
  ).map((row) => row.map((value) => ({ value, isEditable: true })));
};

export const generateSudokuSolved = (): SudokuBoard => {
  return generateRows();
};

export const generateSudoku = (): SudokuBoard => {
  const rows = generateRows();

  return hideValues(rows);
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
