// User input to filter down the database results
import Button from './Button';

const Input = () => {
    return (
        <>
            <form>
                <label htmlFor="players">Number of Players</label>
                <select id="players">
                    <option value="2">Two Players</option>
                    <option value="3">Three Players</option>
                    <option value="4">Four Players</option>
                    <option value="5">Five Players</option>
                    <option value="6">Six Players</option>
                    <option value="7">Seven Players</option>
                    <option value="8">Eight Players</option>
                </select>
                <label htmlFor="time">Time (minutes)</label>
                <input type="number"></input>
                <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty">
                    <option value="1">Easy</option> 
                    <option value="2">Medium</option> 
                    <option value="3">Hard</option> 
                </select>
                <Button buttonText="Find A Game"/>
            </form>
            <Button buttonText="Show All Games"/>
        </>
    );
};

export default Input;