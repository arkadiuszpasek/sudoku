import { chunk, range, shuffle } from "lodash";
import { SudokuBoard, SudokuBoardSquare } from "./types";

const shiftRowBySquare = (row: number[]): number[] => {
  const [f, s, t, ...rest] = row;
  return [...rest, f, s, t];
};
const shiftRowByColumn = (row: number[]): number[] => {
  const [f, ...rest] = row;
  return [...rest, f];
};
const generateRows = (): number[][] => {
  const firstRow = shuffle(range(1, 9));
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

const reshapeRowsToSquares = (rows: number[][]): SudokuBoardSquare[] => {
  return chunk(rows, 3).map((tripleRows) => {
    const [fRowChunked, sRowChunked, tRowChunked] = tripleRows.map((row) =>
      chunk(row, 3)
    );
    return range(1, 3).map((i) => [
      ...fRowChunked[i],
      ...sRowChunked[i],
      ...tRowChunked[i],
    ]);
  });
};

export const generateSudokuBoard = (): SudokuBoard => {
  const rows = generateRows();
  const squares = reshapeRowsToSquares(rows);

  return chunk(squares, 3);
};
