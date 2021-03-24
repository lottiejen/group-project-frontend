// A view to show all of the games which are in the database
import {manyGames} from '../data/dummyData';
import GameInfo from './GameInfo';

let gamesData = manyGames.data;


const Games = () => {
    return (
        <section class="row card-container">
            {gamesData.map((game, index) => (                
                <article className="gamelisting col-md-6" key={index}>
                    <h2>{game.title}</h2>
                
                  
                    <GameInfo difficulty={ game.difficulty} time={  game.time } min_players={  game.min_players} max_players={  game.max_players}/>
                    
                    
                    <ul>
                        {game.genres.map ((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
};

export default Games;