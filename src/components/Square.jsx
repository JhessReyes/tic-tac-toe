import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="border border-4 px-2 py-2 border-primary  text-6xl"
      onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
