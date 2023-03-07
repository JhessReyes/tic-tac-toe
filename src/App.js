import "./App.css";
let a = "Hola Mundo";

function Square ({value}){
  return (
  <button className="square">
      {value}
  </button>
  )
}

function Board(){

  return(
      <div className="board">
        <div className="board-row">
        <Square value={'X'}/>
          <Square value={'O'}/>
          <Square value={'X'}/>
        </div>
          
          <div className="board-row ">
          <Square value={'O'}/>
          <Square value={'X'}/>
          <Square value={'O'}/>
          </div>
          
          <div className="board-row">
          <Square value={'X'}/>
          <Square value={'O'}/>
          <Square value={'X'}/>
          </div>
         

      </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className="btn btn-ghost">Tic Tac Toe</h1>
      <h1 className="text-3xl font-bold underline">{a}</h1>
      <Board/>
    </div>
    
    
  );
  
}



export default App;
