// User input to filter down the database results
import Button from './Button';
import boardgame from '../assets/boardgame.png'
import boardgame2 from '../assets/boardgame2.png'

const Input = () => {
    return (
        <section className="d-flex flex-column align-items-center ">
             <img className="icon__2" src={boardgame} alt=""/>
             <img className="icon__3" src={boardgame2} alt=""/>
                <form className="form-control mb-4 searchform glass">
                <h3 className="searchform__title">Game Finder</h3>
                <div className="searchform__inputs">
                    <label htmlFor="players">Number of Players</label>
                    <select className="mb-4 py-1 searchform__input" id="players">
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                    </select>
                    <label htmlFor="time">Time (minutes)</label>
                    <input className="mb-4 searchform__input" type="number"></input>
                    <label htmlFor="difficulty">Difficulty</label>
                    <select className="mb-4 py-1 searchform__input" id="difficulty">
                        <option value="1">Easy</option> 
                        <option value="2">Medium</option> 
                        <option value="3">Hard</option> 
                    </select>
                </div>
                <div className = "searchform__buttons">
                    <Button buttonText="Find Me A Game" className="searchform__button"/>
                    <Button buttonText="Show All Games" className="searchform__button"/>
                </div>
                </form>
        </section>
    );
};

export default Input;