// A single game view which returns after the user inputs - retrives data from the store.

// Dummy data import
import {singleGame} from '../data/dummyData';

import Button from './Button';
import gamestack from '../assets/gamesstack.jpg'
import Reviews from './Reviews';
import { Link } from 'react-router-dom'
import GameInfo from './GameInfo';



let { id, title, difficulty, time, min_players, max_players, genres, description } = singleGame

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
                <GameInfo difficulty={ difficulty} time={ time } min_players={ min_players} max_players={ max_players}/>
                <h4 className="mt-4">Genres</h4> 
                <ul className="info-list mb-4">
                    {genres.map ((genre) => (
                        <li className="list-item" key={genre}>{genre}</li>
                    ))}
                </ul>
                <Button buttonClass="primary" buttonText="Previous Game"/>
                <Button buttonClass="primary" buttonText="Next Game"/>
            </article>
            
            <div className="mt-4">
                <Reviews id= {id} />
            </div>
            <Link to="/">
                <Button buttonClass="primary" buttonText="Return to Search"/>
            </Link>
        </section>
    );
};

export default Game;