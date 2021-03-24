// Header component to be used across all the views
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header mb-4">
            <div className="header__container">
                <small className="header__subtitle"> What do you want to play tonight?</small>
                <h1 className="header__title">Haven't got a Cluedo</h1>
            </div>
            

            <nav className="nav">
                <ul className="nav__list">
                    <li ><Link to="" className="nav__item">Game Reccomendation</Link></li>
                    <li ><Link to="/all" className="nav__item">See All Games</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;