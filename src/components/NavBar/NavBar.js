import '../NavBar/NavBar.css';
import logo from '../../images/logo.png';
import account from '../../images/account.png';
import buttonPopup from '../../images/button-popup.png';
import { Link } from 'react-router-dom'; 

function NavBar() {
    return (
        <div className='navBar'>
            <img className='navBar__logo' src={logo} alt='Лоотип'/>
            <div className='navBar__links'>
                <Link to='/movies' className='link navBar__link'>Фильмы</Link>
                <Link to='/saved-movies' className='link navBar__link'>Сохранённые фильмы</Link>
            </div>
            <div className='navBar__accountBox'>
                <p className='navBar__text'>Аккаунт</p>
                <img className='navBar__account' src={account} alt='Лоотип' />
                <img className='button navBar__button-popup' src={buttonPopup} alt='Лоотип' />
            </div>
        </div>
    );
  }

export default NavBar;