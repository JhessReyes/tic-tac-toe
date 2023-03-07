import React from "react";

function Square({ value, onCLick }) {
  return (
    <button className="btn" onClick={onCLick}>
      {value}
    </button>
  );
}

export default Square;
