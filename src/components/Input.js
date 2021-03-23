// User input to filter down the database results
import Button from './Button';
import { Link } from 'react-router-dom'

const Input = () => {
    return (
        <section className="d-flex flex-column align-items-center">
            <form className="form-control d-flex flex-column  mb-4 searchform">
                <h3>Game Finder</h3>
                <label htmlFor="players">Number of Players</label>
                <select className="mb-4 py-1" id="players">
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
                <label htmlFor="time">Time (minutes)</label>
                <input className="mb-4 search-input" type="number"></input>
                <label htmlFor="difficulty">Difficulty</label>
                <select className="mb-4 py-1" id="difficulty">
                    <option value="1">Easy</option> 
                    <option value="2">Medium</option> 
                    <option value="3">Hard</option> 
                </select>
                <Link to="/">
                    <Button buttonClass="primary" buttonText="Find Me A Game"/>
                </Link>
                <Link to="/all">
                    <Button buttonClass="primary" buttonText="Show All Games"/>
                </Link>
            </form>
        </section>
    );
};

export default Input;