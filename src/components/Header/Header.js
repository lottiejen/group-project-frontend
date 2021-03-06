// Header component to be used across all the views
import { Link } from 'react-router-dom';
import user from '../../assets/user.svg'
const Header = () => {
    return (
        <header className="header mb-2">
            <div className="header__user-login" >
                <img className="header__user" src={user} alt="user icon" />
                <span className = "header__login"> Log In </span>
            </div>
            <div className="header__container">
                <small className="header__subtitle"> What do you want to play tonight?</small>
                <h1 className="header__title header__style">Haven't got a Cluedo</h1>
            </div>
            

            <nav className="nav">
                <ul className="nav__list">
                    <li ><Link to="" className="nav__item">Game Recommendation</Link></li>
                    <li ><Link to="/all" className="nav__item">See All Games</Link></li>
                </ul>
                
            </nav>

            
        </header>
    );
};

export default Header;