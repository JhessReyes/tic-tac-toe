import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-0 w-[16rem] sm:w-[32rem] md:w-[32rem] xl:w-[38rem]">
          {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Board;
