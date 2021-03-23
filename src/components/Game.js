// A single game view which returns after the user inputs - retrives data from the store.

// Dummy data import
import {singleGame} from '../data/dummyData';

import Button from './Button';
import gamestack from '../assets/gamesstack.jpg'

let { title, difficulty, time, min_players, max_players, genres, description } = singleGame

const Game = () => {
    return (
        <section className="d-flex flex-column align-items-center">
            <article className="container-sm card game-card">
                <figure>  
                    <img className="gamecard-img" src={gamestack} alt=""/>
                </figure>    
                <h2>{title}</h2>
                <p>Game description: {description}</p>
                <h3>Game Information</h3>
                <ul className="info-list">
                    <li className=""><b>Difficulty:</b> {difficulty === 1 ? "Easy" : 
                        difficulty === 2 ? "Medium" : "Hard"}</li>
                    <li className=""><b>Time:</b> {time} minutes</li>
                    <li className=""><b>Minimum Players:</b> {min_players}</li>
                    <li className=""><b>Maximum Players:</b> {max_players}</li>
                </ul>
                <h3 className="mt-4">Genres</h3> 
                <ul className="info-list mb-4">
                    {genres.map ((genre) => (
                        <li className="list-item" key={genre}>{genre}</li>
                    ))}
                </ul>
                <Button buttonText="Previous Game"/>
                <Button buttonText="Next Game"/>
            </article>

            <Button buttonText="Return to Search"/>
        </section>
    );
};

export default Game;