// User input to filter down the database results
import Button from '../Button/Button';
import { useState } from 'react';
import boardgame from '../../assets/boardgame.png'
import boardgame2 from '../../assets/boardgame2.png'


const Input = ( {fetchRecommendations, recommendations} ) => {

    const [players, setPlayers] = useState("2");
    const [time, setTime] = useState("");
    const [difficulty, setDifficulty] = useState("1");

    const handlePlayers = (e) => {
        setPlayers(e.currentTarget.value);
    }

    const handleTime = (e) => {
        setTime(e.currentTarget.value);
    }

    const handleDifficulty = (e) => {
        setDifficulty(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = {
            "players": players,
            "time": time,
            "difficulty": difficulty, 
        }

        fetchRecommendations(formData);
        
    }

    return (
        <section className="d-flex flex-column align-items-center">
            
            <img className="icon__2" src={boardgame} alt=""/>
             <img className="icon__3" src={boardgame2} alt=""/>
            <form onSubmit={handleSubmit} className="form-control d-flex flex-column  mb-4 searchform glass">
            <h3 className="searchform__title header__style">Game Finder</h3>
            <div className="searchform__inputs">
                <label htmlFor="players">Number of Players</label>
                <select 
                    value={players}
                    onChange={handlePlayers} 
                    className="mb-4 py-1 searchform__input" 
                    id="players"
                >
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
                <label htmlFor="time">Time (minutes)</label>
                <input
                    required
                    value={time}
                    onChange={handleTime} 
                    className="mb-4 searchform__input" 
                    type="number"
                ></input>
                <label htmlFor="difficulty">Difficulty</label>
                <select
                    value={difficulty}
                    onChange={handleDifficulty} 
                    className="mb-4 py-1 searchform__input" 
                    id="difficulty"
                >
                    <option value="1">Easy</option> 
                    <option value="2">Medium</option> 
                    <option value="3">Hard</option> 
                </select>
                </div>
                <div className = "searchform__buttons">
                    <Button buttonText="Find Me A Game" className="searchform__button"/>

                </div>
                
            </form>
        </section>
    );
};

export default Input;