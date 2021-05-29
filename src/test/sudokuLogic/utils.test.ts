import { uniq } from "lodash";
import { SudokuValidationResult } from "../../logic/sudoku/types";
import {
  generateRows,
  generateSudokuSolved,
  validateSudoku,
} from "../../logic/sudoku/utils/utils";

describe("Sudoku utils", () => {
  it("generateRows should generate 9 correct rows", () => {
    const rows = generateRows();
    rows.forEach((row) => {
      expect(row.length).toBe(9);
      expect(uniq(row).length === row.length).toBe(true);
    });
  });

  it("generateSudokuBoard should correctly generate board", () => {
    const sudoku = generateSudokuSolved();

    expect(sudoku.length).toBe(9);
    sudoku.forEach((squareRow) => {
      expect(squareRow.length).toBe(9);
    });
  });

  describe("Validation", () => {
    it("should not highlight invalid values on solved sudoku", () => {
      const sudoku = generateSudokuSolved();
      const { board, result } = validateSudoku(sudoku);

      expect(result).toBe(SudokuValidationResult.Correct);
      board.forEach(row => {
        row.forEach(d => 
          expect(d.hasError).toBeFalsy())
      })
    });

    it("should highlight invalid values that collide in row", () => {
      const sudoku = generateSudokuSolved();
      sudoku[0][0] = sudoku[0][2];
      const { board, result } = validateSudoku(sudoku);

      expect(result).toBe(SudokuValidationResult.Incorrect);
      expect(board[0][0].hasError).toBe(true);
    });

    it("should highlight invalid values that collide in column", () => {
      const sudoku = generateSudokuSolved();
      sudoku[4][0] = sudoku[0][0];
      const { board, result } = validateSudoku(sudoku);

      expect(result).toBe(SudokuValidationResult.Incorrect);
      expect(board[4][0].hasError).toBe(true);
    });

    it("should highlight invalid values that collide in same square", () => {
      const sudoku = generateSudokuSolved();
      sudoku[0][0] = sudoku[1][1];
      const { board, result } = validateSudoku(sudoku);

      expect(result).toBe(SudokuValidationResult.Incorrect);
      expect(board[0][0].hasError).toBe(true);
    });
  });
});
