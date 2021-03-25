// A single game view which returns after the user inputs - retrives data from the store.

// Dummy data import
import {singleGame} from '../../data/dummyData';

import Button from '../Button/Button';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom'
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';


class Game extends Component {
    
    
    
    render() {
        
        let { id, name, difficulty, time, min_players, max_players, genres, description, img_url } = this.props.game
console.log(this.props)
        return (
        <section className="d-flex flex-column align-items-center">
            <article className="container-sm card game-card">
                <figure>  
                    <img className="gamecard-img" src={img_url} alt=""/>
                </figure>    
                <h2>{name}</h2>
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
        </section>
            
        );
    }
}

export default Game;
