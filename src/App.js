import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const Defboard = ["X", "O", "X", "X", "O", "X", "X", "O", "X"];

  const handleClick = (i) => {
    console.log(i);
  };

  return (
    <div className="App">
      <h1 className="title-game">
        Tic Tac Toe
      </h1>
      <Board square={Defboard} onClick={handleClick} />
    </div>
  );
}

export default App;
