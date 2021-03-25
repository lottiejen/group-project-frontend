// A single game view which returns after the user inputs - retrives data from the store.

import Button from '../Button/Button';
import Reviews from '../Reviews';
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';


class Game extends Component {
    constructor(props){
        super(props);

        this.handleClickNext = this.handleClickNext.bind(this)
    }


    handleClickNext(e){
        e.preventDefault();
        let { id } = this.props.game;
        this.props.nextGame(id)
    }
    
    
    render() {
        
        let { id, name, difficulty, time, min_players, max_players, genres, description, img_url } = this.props.game

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
                <button onClick={this.handleClickNext}>Next Game</button>
                {/* <Button buttonClass="primary" buttonText="Next Game"/> */}
            </article>
            
            <div className="mt-4">
                <Reviews id= {id} />
            </div>
        </section>
            
        );
    }
}

export default Game;
