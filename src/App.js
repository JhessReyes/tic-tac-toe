import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { verifyWinner } from "./components/Game/+Game.ts";
import Game from "./components/Game/Game.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  let turn = xisNext ? "X" : "O";

  const handleClick = (i) => {
    const copyBoard = board.slice();
    if (verifyWinner(board) || copyBoard[i]) {
      return;
    }
    copyBoard[i] = xisNext ? "X" : "O";
    setBoard(copyBoard);
    setXisNext(!xisNext);

    if (xisNext) {
      const copyBoard0 = copyBoard.slice();
      copyBoard0[0] = !xisNext ? "X" : "O";
      console.log(copyBoard0);
      setBoard(copyBoard0);
      setXisNext(xisNext);
    }
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
