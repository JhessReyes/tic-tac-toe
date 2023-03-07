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
            <Square value={'X'}/>
            <Square value={'O'}/>
            <Square value={'X'}/>
            <Square value={'O'}/>
            <Square value={'X'}/>
            <Square value={'O'}/>
            <Square value={'X'}/>
            <Square value={'O'}/>
            <Square value={'X'}/>

        </div>
    )
}

ReactDOM.render(
    <Square/>,
    document.getElementById('root')
)