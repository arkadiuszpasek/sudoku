import React from "react";
import "./App.scss";
import { Actions } from "./components/board/actions/Actions";
import { Sudoku } from "./components/board/Sudoku/Sudoku";
import { SudokuProvider } from "./logic/sudoku/useSudoku";

function App() {
  return (
    <div className="container">
      <SudokuProvider>
        <Sudoku />
        <Actions />
      </SudokuProvider>
    </div>
  );
}

export default App;
