import React from "react";

function Square({ value, onClick }) {
  return (
    <div className="square flex items-center justify-center" onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
