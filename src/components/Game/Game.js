// A single game view which returns after the user inputs - retrives data from the store.

import Button from '../Button/Button';
import Reviews from '../Reviews';
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';
import {Link} from 'react-router-dom';


class Game extends Component {
    constructor(props){
        super(props);

        this.handleClickNext = this.handleClickNext.bind(this)
    }

    componentDidMount() {
        this.props.incrementDisplayGame()
        this.props.handleLoad()
    }

    componentDidUpdate(previousProps) {

        if(previousProps.gameID !== this.props.gameID){
            this.props.incrementDisplayGame();
        }
    }

    handleClickNext(e){
        e.preventDefault();
        let { id } = this.props.game;
        this.props.nextGame(id)
    }
    
    
    render() {
        
        if(!this.props.game){
            return null
        } 

        let { id, name, difficulty, time, min_players, max_players, genres, description, img_url } = this.props.game

        let { nextGameID } = this.props

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
                {nextGameID === undefined ? null : <Link to={`/games/${nextGameID}`} >Next Game</Link>}
                
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
