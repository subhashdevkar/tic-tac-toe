import { useState } from "react";
import { Square } from "./square";
import { CalculateWinner } from "./calculateWinner";

export function Board({ square, xIsNext, onPlay }) {


    function handleClick(i) {
        const nextSquare = square.slice();
        if (square[i] || CalculateWinner(square)) {
            return
        }
        if (xIsNext) {
            nextSquare[i] = "X"
        } else {
            nextSquare[i] = "O"
        }
        onPlay(nextSquare)

    }
    const winner = CalculateWinner(square)
    let status;
    if (winner) {
        status = "Winner is :" + winner
    }else if(!winner && square.every(item=>item!=="" && item!==null)){
        status="this is a draw,Please restart the game"
    }
     else {
        status = "Next move:" + (xIsNext ? "X" : "O")
    }

    return (
        <div className="">
            <div>
                <div className={xIsNext?"fw-bold text-success fs-4":"fw-bold text-danger fs-4"}>
                    {status}
                </div>
                <div className="border border-2">
                    <div>
                        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div>
                        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div>
                        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
            </div>

        </div>
    )
}