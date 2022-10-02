import '../NavPopup/NavPopup.css';
import { Link } from 'react-router-dom';
import account from '../../images/account.svg';

function NavPopup() {
    return (
        <div className='nav-popup'>
            <div className='nav-popup__background'/>
            <div className='nav-popup__container'>
                <button className='button nav-popup__close-button' />
                <div className='nav-popup__link-box'>
                    <Link to='/' className='link nav-popup__link'>Главная</Link>
                    <Link to='/movies' className='link nav-popup__link'>Фильмы</Link>
                    <Link to='/saved-movies' className='link nav-popup__link'>Сохранённые фильмы</Link>
                </div>
                <div className='nav-popup__accountBox'>
                    <p className='nav-popup__text'>Аккаунт</p>
                    <img className='nav-popup__account' src={account} alt='Лоотип' />
                </div>
            </div>
        </div>
    );
  }

export default NavPopup;