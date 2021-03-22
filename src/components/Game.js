// A single game view which returns after the user inputs - retrives data from the store.

// Dummy data import
import {singleGame} from '../data/dummyData';

import Button from './Button';

let { title, difficulty, time, min_players, max_players, genres, description } = singleGame

const Game = () => {
    return (
        <>
            <div>  
                <figure>
                    <img src="http://placekitten.com/300/200" alt=""/>
                </figure>
                <h2>{title}</h2>
                <p>Game description: {description}</p>
                <ul>
                    <li>Difficulty: {difficulty}</li>
                    <li>Time: {time}</li>
                    <li>Minimum Players: {min_players}</li>
                    <li>Maximum Players: {max_players}</li>
                </ul> 
                <ul>
                    {genres.map ((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <Button buttonText="Previous Game"/>
                <Button buttonText="Next Game"/>
            </div>

            <Button buttonText="Return to Search"/>
        </>
    );
};

export default Game;