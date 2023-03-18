import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { verifyWinner } from "./components/Game/+Game.ts";
import Game from "./components/Game/Game.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  let turn = xisNext ? "X" : "O";

  useEffect(() => {
    if (!xisNext) {
      const bestMove = findBestMove(board);
      handleClick(bestMove);
    }
  }, [board]);

  const handleClick = (i) => {
    const copyBoard = board.slice();
    if (verifyWinner(board) || copyBoard[i]) {
      return;
    }
    copyBoard[i] = xisNext ? "X" : "O";
    setBoard(copyBoard);
    setXisNext(!xisNext);   
  };

  const findBestMove = (board) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) { //si la celda i esta vacía en el tablero
        let newBoard = [...board]; //hacemos una copia del board
        newBoard[i] = "O"; //ponemos O en la celda i
        let score = minimax(newBoard, false);
        if (score > bestScore) { //compara el score de la jugada actual con el bestScore que tiene por el momento
          bestScore = score; // registra la nueva mejor jugada 
          bestMove = i;  //celda donde O debería de colocarse 
        }
      }
    }

    return bestMove;
  };

  // board indica el tablero y aiplayer que es la compu
  const minimax = (board, aiPlayer) => {
    //vemos quien va ganando 
    if (verifyWinner(board) === "X") { //
      return -1;
    } else if (verifyWinner(board) === "O") {
      return 1;
    } else if (!board.includes(null)) {
      return 0;
    }
    //variable para ver si va ganando o no la compu
    let bestScore = aiPlayer ? -Infinity : Infinity;
    //vemos el valor los nuevos valores en la tabla
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        let newBoard = [...board];
        newBoard[i] = aiPlayer ? "O" : "X";
        let score = minimax(newBoard, !aiPlayer);
        // actualizamos los valores de la computadora
        if (aiPlayer && score > bestScore) {
          bestScore = score;
        } else if (!aiPlayer && score < bestScore) {
          bestScore = score;
        }
      }
    }

    return bestScore;
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