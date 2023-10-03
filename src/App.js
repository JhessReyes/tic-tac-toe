import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
//Hola Sam
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
      <h1 className="btn btn-ghost text-5xl my-10">Tic Tac Toe</h1>
      <Board square={Defboard} onClick={handleClick} />
    </div>
  );
}

export default App;
