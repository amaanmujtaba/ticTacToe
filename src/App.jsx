import PlayerDetails from "./Components/PlayerDetails";
import GameBoard from "./Components/GameBoard";
import {useState} from "react";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("O");

  let gameBoard = [...initialGameBoard.map(arr=>[...arr])];
  for (const turn of gameTurns){
      const {player, row, col } = turn;
      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination in WINNING_COMBINATIONS) {
    const currentCombination = WINNING_COMBINATIONS[combination];

    const first = gameBoard[currentCombination[0].row][currentCombination[0].column];
    const second = gameBoard[currentCombination[1].row][currentCombination[1].column];
    const third = gameBoard[currentCombination[2].row][currentCombination[2].column];

    if (first !== null && first === second && second === third) {
      winner = `${first} won`;
    }
  }


  if(gameTurns.length === 9 && winner === null){
    winner = "Draw!!";
  }
  function handleSquareSelect(rowIndex, colIndex){
    //setActivePlayer(activePlayer === "O" ? "X" : "O");
    setGameTurns(function(prevTurns){
      let currentPlayer = "O";
      if(prevTurns.length>0 && prevTurns[0].player==="O"){
        currentPlayer = "X";
      }
      const updatedTurns = [ {player: currentPlayer, row: rowIndex, col:colIndex} , ...prevTurns]
      return(updatedTurns);
    });
  }

 
    /*
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 }
    */
    function handleRestart(){
      setGameTurns([]);
    }


  let currentPlayer = "O";
  if(gameTurns.length>0 && gameTurns[0].player=="O"){
    currentPlayer = "X";
  }

  

  return (
    <main>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <PlayerDetails name = "Player 1" symbol = "O" active = {currentPlayer==="O"} />
          <PlayerDetails name = "Player 2" symbol = "X" active = {currentPlayer==="X"} />

        </ol>
        {winner &&  <GameOver winner = {winner} onRestart = {handleRestart}/>}
        <GameBoard onSquareSelect = {handleSquareSelect} board = {gameBoard} activePlayer = {currentPlayer}/>
        <Log turns = {gameTurns}/>
      </div>

      
    </main>
  )
}

export default App
