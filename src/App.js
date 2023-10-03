import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { verifyWinner } from "./components/Game/+Game.ts";
import Game from "./components/Game/Game.jsx";
import Swal from "sweetalert2";
// hola sam
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  let turn = xisNext ? "X" : "O";

  useEffect(() => {
    if (!xisNext) {
      const bestMove = findBestMove(board);
      handleClick(bestMove);
    }
    verifyWinner(board) && winner(verifyWinner(board));
    if (board.filter((e) => e === null).length === 0) tier();
  }, [board]);

  function winner(player) {
    return Swal.fire({
      title: "EL GANADOR ES!!",
      text: "El jugador: " + player,
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `
        rgba(0,0,123,0.4)
        url("cat.gif")
        left top
        no-repeat
      `,
    });
  }

  function tier() {
    return Swal.fire({
      title: "Empate :(",
      width: 600,
      padding: "3em",
      color: "#716add",
      imageUrl: "embeces.jpg",
      imageWidth: 400,
      imageHeight: 400,
    });
  }
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
      if (board[i] === null) {
        //si la celda i esta vacía en el tablero
        let newBoard = [...board]; //hacemos una copia del board
        newBoard[i] = "O"; //ponemos O en la celda i
        let score = minimax(newBoard, false);
        if (score > bestScore) {
          //compara el score de la jugada actual con el bestScore que tiene por el momento
          bestScore = score; // registra la nueva mejor jugada
          bestMove = i; //celda donde O debería de colocarse
        }
      }
    }

    return bestMove;
  };

  // board indica el tablero y aiplayer que es la compu
  const minimax = (board, aiPlayer) => {
    //vemos quien va ganando
    if (verifyWinner(board) === "X") {
      //
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
      <Game />
      <button
        className="btn btn-primary my-10"
        onClick={(e) => setBoard(Array(9).fill(null))}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;
