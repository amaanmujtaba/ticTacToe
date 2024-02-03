import {useState } from "react";


export default function PlayerDetails(props){
    const [Name, setName] = useState(props.name);
    const [isEditing, setIsEditing] = useState(false);


    let content = "Edit";
    function handleClick(){
        setIsEditing((editing) => !editing);
    }


    function handleInputChange(e){
        setName(e.target.value);

    }
    
    let c = "";
    if(props.active === true){
        c = "active"; 
    }

    let playerName = "";
    let editButton ="";
    //If true. Then what
    if(isEditing){
        playerName = <input type="text" onChange={handleInputChange}/>;
        editButton = <button onClick={handleClick}>Save</button>;

    }
    else{
        playerName = <span className="player-name">{Name}</span>;
        editButton = <button onClick={handleClick}>Edit</button>;
    }
    return(
        
        <li className= {c}>
            <span className="player">
                {playerName}
                <span className ="player-symbol">{props.symbol}</span>
            </span>
            {editButton}
        </li>
    )
}