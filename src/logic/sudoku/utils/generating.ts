import { flatten, random, range, shuffle } from "lodash";
import { config } from "../../../config/config";
import { SudokuBoard, SudokuBoardValue } from "../types";

const shiftRowBySquare = (row: number[]): number[] => {
  const [f, s, t, ...rest] = row;
  return [...rest, f, s, t];
};

const shiftRowByColumn = (row: number[]): number[] => {
  const [f, ...rest] = row;
  return [...rest, f];
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