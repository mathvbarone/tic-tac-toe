import React from "react";
import { INITIAL_STATE } from "./utils";

const TicTacToe = () => {

    const [board, setBoard] = React.useState(INITIAL_STATE["board"]);

    const handleClick = (index: number) => {
        const newBoard = [...board];
        setBoard(newBoard);
        console.log(newBoard, index)
    }

    return (
        <div className="wrapper">
            <div className="container">
                {board.map((value, index) => {
                    return (
                        <div className="cell" onClick={() => handleClick(index)} key={index}>
                            {value}
                        </div>
                    )
                })}                
            </div>
        </div>
    );
}

export default TicTacToe;
