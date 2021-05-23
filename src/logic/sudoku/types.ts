export type SudokuBoardValue = {
  value: number | null;
  hasError?: boolean;
  isEditable: boolean;
};
export type SudokuBoard = SudokuBoardValue[][];
export enum SudokuValidationResult {
  Incorrect = "Incorrect",
  Correct = "Correct",
}

export interface ValidationResult {
  board: SudokuBoard;
  result: SudokuValidationResult;
}

export interface SudokuHook {
  board: SudokuBoard;
  setBoard(board: SudokuBoard): void;
  result?: SudokuValidationResult;
  updateSquare(
    digitRowIdx: number,
    digitColIdx: number,
    value: SudokuBoardValue["value"]
  ): void;
  reset(): void;
  validate(): void;
}
