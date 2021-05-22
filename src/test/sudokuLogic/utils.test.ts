import { uniq } from "lodash";
import { generateRows, generateSudokuBoard } from "../../logic/sudoku/utils";

describe("Sudoku utils", () => {
  it("generateRows should generate 9 correct rows", () => {
    const rows = generateRows();
    rows.forEach((row) => {
      expect(row.length).toBe(9);
      expect(uniq(row).length === row.length).toBe(true);
    });
  });

  it("generateSudokuBoard should correctly generate board", () => {
    const squares = generateSudokuBoard();

    expect(squares.length).toBe(3);
    squares.forEach((squareRow) => {
      expect(squareRow.length).toBe(3);

      squareRow.forEach((row) => {
        expect(row.length).toBe(3);
      });
    });
  });
});
