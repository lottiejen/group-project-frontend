// A view to show all of the games which are in the database
import {manyGames} from '../data/dummyData';

let gamesData = manyGames.data;


const Games = () => {
    return (
        <section>
            {gamesData.map((game, index) => (                
                <div key={index}>
                    <h2>{game.title}</h2>
                    <ul>
                        <li>Difficulty: {game.difficulty}</li>
                        <li>Time: {game.time}</li>
                        <li>Minimum Players: {game.min_players}</li>
                        <li>Maximum Players: {game.max_players}</li>
                    </ul>
                    <ul>
                        {game.genres.map ((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Games;