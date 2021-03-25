// A view to show all of the games which are in the database
import GameInfo from '../GameInfo/GameInfo';
import { Component } from 'react';
// let gamesData = manyGames.data;


class Games extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {

        let { gamesData } = this.props;
        

        return (
            <section className="row card-container">
                {Object.values(gamesData).map((game, index) => (
                    <article className="gamelisting" key={index}>
                        <h2 className="card-title"> {game.name}</h2>
                        

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