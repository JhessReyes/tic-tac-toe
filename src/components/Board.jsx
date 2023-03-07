import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div>
      {squares.map((squares, i) => (
        <Square key={i} value={squares} onCLick={() => onClick(i)}></Square>
      ))}
    </div>
  );
}

export default Board;
