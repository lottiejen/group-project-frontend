// A view to show all of the games which are in the database
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import magnifier from '../../assets/magnifier.svg';


class Games extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {

        let { gamesData } = this.props;
        

        return (
            <>
            <div className="input-group searchbar">
                <img src={magnifier} alt="search icon" className="searchbar__icon"/>
                <input type="search" className="  rounded form-control searchbar__input" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            </div>
            <div className="searchbar__genres">
                <span className="badge gamecard__genre">Action</span>
                <span className="badge gamecard__genre">Card</span>
                <span className="badge gamecard__genre">Cooperative</span>
                <span className="badge gamecard__genre">Strategy</span>
                <span className="badge gamecard__genre">Trading</span>
            </div>
            
            <section className="row mt-4 card-container">
                {Object.values(gamesData).map((game, index) => (
                    <article className="gamelisting col-md-6" key={index}>
                        <Link to={`games/${index + 1}`} style={{ textDecoration: 'none' }}>
                            <h2 className=" header__style card-title"> {game.name}</h2>
                        </Link>
                    
                        <GameInfo difficulty={game.difficulty} time={game.time} min_players={game.min_players} max_players={game.max_players} />


                        <ul className="mt-4">
                            {game.genres.map((genre, index) => (
                                <li className="badge gamecard__genre" key={index}>{genre}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
            </>
        );
    }


};

export default Games;