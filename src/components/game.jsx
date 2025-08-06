import { useState } from "react";
import { Board } from "./board";

export function Game() {
    const [currentMove, setCurrentMove] = useState(0)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const xIsNext = currentMove % 2 === 0
    const currentSquare = history[currentMove]

    function handlePlay(nextSquare) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }
    function jumpTo(id) {
        setCurrentMove(id)
    }
    function handleRestart() {
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }
    return (
        <div className="d-flex flex-wrap justify-content-center gap-5 shadow-lg p-4 border border-2 rounded-3" style={{ minWidth: "350px",width:"600px",backgroundColor:"#F7F5FB" }} >
            <div className="d-flex flex-column align-items-center justify-content-center">
                <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
                <button onClick={handleRestart} className="btn btn-info mt-4">Restart</button>
            </div>
            <div>
                <ul className="w-auto p-0 m-0">
                    {
                        history && history.length ?
                            history.map((step, id) => (
                                id > 0 ?
                                    <li className=" list-unstyled" key={id}>
                                        <button className="btn btn-outline-primary mb-1" style={{width:"135.55px"}} onClick={() => jumpTo(id)}>Go to move #{id}</button>
                                    </li> :
                                    <li className="list-unstyled" key={id}>
                                        <button className="btn btn-outline-primary mb-1" style={{width:"135.55px"}} onClick={() => jumpTo(id)}>Start the Game</button>
                                    </li>
                            ))
                            : null
                    }
                </ul>
            </div>
        </div>
    )
}