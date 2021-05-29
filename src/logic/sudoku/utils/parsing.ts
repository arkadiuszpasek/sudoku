import { logger } from "../../logger";
import { SudokuBoard } from "../types";

export const parseJsonStringToBoard = (
  json: string
): SudokuBoard | undefined => {
  try {
    const arr = JSON.parse(json.replace(/[\s"]/g, "")) as (number | null)[][];
    if (!(arr instanceof Array) || !(arr[0] instanceof Array)) {
      logger.warn("Received input is not a correct array", arr, json);

      return undefined;
    }

    if (arr.length !== 9 || !!arr.find((row) => row.length !== 9)) {
      logger.warn("Received input array is not of correct shape", arr, json);

      return undefined;
    }

    if (
      arr.find((row) =>
        row.find((el) => {
          return el && typeof el !== "number";
        })
      )
    ) {
      logger.warn("Received input has illegal values", arr, json);

      return undefined;
    }

    return arr.map((row) =>
      row.map((el) => ({
        value: el,
        isEditable: !el,
      }))
    );
  } catch (e) {
    logger.warn("Couldn't parse input to sudoku board", e, json);

    return undefined;
  }
};