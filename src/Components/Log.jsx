import {moves} from "./data.js"

export default function Log(props){
    const board = props.turns;
    

    return (
        <ol id = "log">
            {board.map(element => (
                <li key={`${element.row}-${element.col}`}>
                    Player {element.player==="O"? "1":"2"} Row: {element.row} Col :{element.col}
                </li>
            ))}
        </ol>
    );
}