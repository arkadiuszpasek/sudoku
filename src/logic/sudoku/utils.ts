import { chunk, range, shuffle } from "lodash";
import { SudokuBoard } from "./types";

const shiftRowBySquare = (row: number[]): number[] => {
  const [f, s, t, ...rest] = row;
  return [...rest, f, s, t];
};
const shiftRowByColumn = (row: number[]): number[] => {
  const [f, ...rest] = row;
  return [...rest, f];
};
export const generateRows = (): number[][] => {
  const firstRow = shuffle(range(1, 10));
  const secondRow = shiftRowBySquare(firstRow);
  const thirdRow = shiftRowBySquare(secondRow);

  const fourthRow = shiftRowByColumn(thirdRow);
  const fifthRow = shiftRowBySquare(fourthRow);
  const sixthRow = shiftRowBySquare(fifthRow);

  const seventhRow = shiftRowByColumn(sixthRow);
  const eighthRow = shiftRowBySquare(seventhRow);
  const ninthRow = shiftRowBySquare(eighthRow);

  return shuffle([
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
    sixthRow,
    seventhRow,
    eighthRow,
    ninthRow,
  ]);
};

export const reshapeRowsToBoard = (rows: number[][]): SudokuBoard => {
  return chunk(rows, 3).map((tripleRows) => {
    const [fRowChunked, sRowChunked, tRowChunked] = tripleRows.map((row) => {
      return chunk(row, 3);
    });

    return range(0, 3).map((i) => {
      return [fRowChunked[i], sRowChunked[i], tRowChunked[i]];
    });
  });
};

export const generateSudokuBoard = (): SudokuBoard => {
  const rows = generateRows();

  return reshapeRowsToBoard(rows);
};
