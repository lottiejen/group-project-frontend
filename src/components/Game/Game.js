// A single game view which returns after the user inputs - retrives data from the store.

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
            <article className="container-sm card game-card glass">
                <figure className="gamecard__figure">  
                    <img className="gamecard-img" src={img_url} alt=""/>
                </figure>    


                <div className="searchbar__genres" >
                  <span className="badge gamecard__genre">Want to play!</span>
                    <span className="badge gamecard__genre">Already Own</span>
                    <span className="badge gamecard__genre">Not Interested</span>  
                </div>
                
                
                <h2 className="gamecard__title header__style ">{name}</h2>
                
                
                <p>{description}</p>
                
                <h4 className=" gamecard__subtitle header__style">Game Information</h4>

                <GameInfo difficulty={ difficulty} time={ time } min_players={ min_players} max_players={ max_players}/>

                <h4 className="mt-4 gamecard__subtitle header__style">Genres</h4> 
                <ul className="mb-4 gamecard__badge">
                    {genres.map ((genre) => (
                        <li className="badge gamecard__genre" key={genre}>{genre}</li>
                    ))}
                </ul>
                
                {nextGameID === undefined ? null : 
                <>
                    <p className="gamecard__text">Don't fancy playing this game? </p>
                    <p className="gamecard__text">Click below for the next recommendation!</p>
                    <div className="button">
                        <Link to={`/games/${nextGameID}`} style={{ textDecoration: 'none' }}><p className="gamecard__nextlink header__style">Next Game</p></Link>
                    </div>
                </>}

            </article>
            
            <div className="mt-4 reviews__container">
                <Reviews id= {id} />
            </div>
        </section>
            
        );
    }
}

export default Game;
