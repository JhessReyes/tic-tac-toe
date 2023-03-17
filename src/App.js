import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Game from "./components/Game/Game.jsx";
import verifyWinner from "./components/Game/+Game.ts";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  let Defboard = ["", "X", "", "X", "O", "X", "X", "O", "X"];
  let turn = xisNext ? "X" : "O";

  const handleClick = (i) => {
    const copyBoard = board.slice();
    if (verifyWinner(board) || copyBoard[i]) {
      return;
    }
    copyBoard[i] = xisNext ? "X" : "O";
    setBoard(copyBoard);
    setXisNext(!xisNext);
    console.log(copyBoard);
  };

  return (
    <div className="App">
      <h1 className="title-game bg-clip-text">Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <Game
        status={
          verifyWinner(board)
            ? "Ganador: " + verifyWinner(board)
            : "Turno de: " + turn
        }
      />
    </div>
  );
}

export default App;
