import {useState} from "react";
import { setOfMoves } from "./data.js";
import {moves} from "./data.js";


export default function GameBoard(props){
    /*
    function handleClick(row,col){
        //alert(`row${row} ${col}`);
        
        setGameBoard((prevGameBoard)=>{
            const updated = [...prevGameBoard.map(inner => [...inner])];
            updated[row][col] = props.activePlayer;
            return updated;
        })
        
        props.onSquareSelect();
        
    }
    console.log(setOfMoves);
    */
    const gameBoard = props.board;

    //console.log(gameBoard)
    return(

        <ol id= "game-board">
            {gameBoard.map(function(row, rowIndex){
                return (<li key = {rowIndex}>
                    <ol>
                    {row.map(function(val, colIndex){
                        return(<li key = {colIndex}>
                            <button onClick={()=> props.onSquareSelect(rowIndex, colIndex)}>{val}</button>
                        </li>)
                    })}
                    </ol>
                    
                </li>);
            })}
        </ol>
    );
    
}
