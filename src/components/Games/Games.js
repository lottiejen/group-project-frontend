// A view to show all of the games which are in the database
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';
import { Link } from 'react-router-dom'


class Games extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {

        let { gamesData } = this.props;
        

        return (
            <section className="row card-container">
                {Object.values(gamesData).map((game, index) => (
                    <article className="gamelisting col-md-6" key={index}>
                        <Link to={`games/${index + 1}`}>
                            <h2>{game.name}</h2>
                        </Link>
                        

                        <GameInfo difficulty={game.difficulty} time={game.time} min_players={game.min_players} max_players={game.max_players} />


                        <ul>
                            {game.genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        );
    }


};

export default Games;