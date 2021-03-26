

const GameInfo = ({ difficulty, time, min_players, max_players, }) => {
    return (
        
                <ul className="info-list">
                    <li className="list-item"><b>Difficulty:</b> {difficulty === 1 ? "Easy" : 
                        difficulty === 2 ? "Medium" : "Hard"}</li>
                    <li className="list-item"><b>Time:</b> {time} Minutes</li>
                    <li className="list-item"><b>Min Players:</b> {min_players}</li>
                    <li className="list-item"><b>Max Players:</b> {max_players}</li>
                </ul>
                
    );
};

export default GameInfo;