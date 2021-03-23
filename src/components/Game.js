// A single game view which returns after the user inputs - retrives data from the store.

// Dummy data import
import {singleGame} from '../data/dummyData';

import Button from './Button';
import gamestack from '../assets/gamesstack.jpg'
import { Link } from 'react-router-dom'

let { title, difficulty, time, min_players, max_players, genres, description } = singleGame

const Game = () => {
    return (
        <section className="d-flex flex-column align-items-center">
            <article className="container-sm card game-card">
                <figure>  
                    <img className="gamecard-img" src={gamestack} alt=""/>
                </figure>    
                <h2>{title}</h2>
                <p>{description}</p>
                <h4>Game Information</h4>
                <ul className="info-list">
                    <li className="list-item"><b>Difficulty:</b> {difficulty === 1 ? "Easy" : 
                        difficulty === 2 ? "Medium" : "Hard"}</li>
                    <li className="list-item"><b>Time:</b> {time} Minutes</li>
                    <li className="list-item"><b>Min Players:</b> {min_players}</li>
                    <li className="list-item"><b>Max Players:</b> {max_players}</li>
                </ul>
                <h4 className="mt-4">Genres</h4> 
                <ul className="info-list mb-4">
                    {genres.map ((genre) => (
                        <li className="list-item" key={genre}>{genre}</li>
                    ))}
                </ul>
                <Button buttonClass="primary" buttonText="Previous Game"/>
                <Button buttonClass="primary" buttonText="Next Game"/>
            </article>

            <Link to="/">
                <Button buttonClass="primary" buttonText="Return to Search"/>
            </Link>
        </section>
    );
};

export default Game;