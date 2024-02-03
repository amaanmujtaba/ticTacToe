export default function GameOver(props){
    return(
        <div id = "game-over">
            <h2> Game Over</h2>
            <p> {props.winner}</p>
            <button onClick={props.onRestart}>Rematch</button>

        </div>
    )
}