import React from "react";
import "./App.scss";
import { Sudoku } from "./components/board/Sudoku/Sudoku";

function App() {
  return (
    <div className="container">
      <Sudoku />
    </div>
  );
}

export default App;
