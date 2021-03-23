// User input to filter down the database results
import Button from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Input = () => {

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

        console.log(formData)
    }

    return (
        <section className="d-flex flex-column align-items-center">
            <h3>Game Finder</h3>
            <form onSubmit={handleSubmit} className="form-control d-flex flex-column  mb-4 searchform">
                <label htmlFor="players">Number of Players</label>
                <select 
                    value={players}
                    onChange={handlePlayers} 
                    className="mb-4 py-1" 
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
                    value={time}
                    onChange={handleTime} 
                    className="mb-4 search-input" 
                    type="number"
                ></input>
                <label htmlFor="difficulty">Difficulty</label>
                <select
                    value={difficulty}
                    onChange={handleDifficulty} 
                    className="mb-4 py-1" 
                    id="difficulty"
                >
                    <option value="1">Easy</option> 
                    <option value="2">Medium</option> 
                    <option value="3">Hard</option> 
                </select>
                
                <Button buttonClass="primary" buttonText="Find Me A Game"/>
                
            </form>
            <Link to="/all">
                <Button buttonClass="primary" buttonText="Show All Games"/>
            </Link>
        </section>
    );
};

export default Input;