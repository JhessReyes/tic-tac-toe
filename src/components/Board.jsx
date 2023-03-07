import React from "react";
import Square from "./Square";

function Board({ square, onClick }) {
  return (
    <>
      <div className="">
        <div className="flex-row">
          <Square value={square[0]} onClick={() => onClick(square[0])} />
          <Square value={square[1]} onClick={() => onClick(square[1])} />
          <Square value={square[2]} onClick={() => onClick(square[2])} />
        </div>

        <div className="flex-row">
          <Square value={square[3]} onClick={() => onClick(square[3])} />
          <Square value={square[4]} onClick={() => onClick(square[4])} />
          <Square value={square[5]} onClick={() => onClick(square[5])} />
        </div>

        <div className="flex-row">
          <Square value={square[6]} onClick={() => onClick(square[6])} />
          <Square value={square[7]} onClick={() => onClick(square[7])} />
          <Square value={square[8]} onClick={() => onClick(square[8])} />
        </div>
      </div>
    </>
  );
}

export default Board;
