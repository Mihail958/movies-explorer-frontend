import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import buttonPopup from '../../images/button-popup.svg';
import { Link } from 'react-router-dom'; 
import NavPopup from '../NavPopup/NavPopup';


function Header() {
    const [isNavPopupOpen, setIsPopupOpen] = React.useState(false);

    function handleNavPopupClick () {
        setIsPopupOpen(true);
    }

    function closeNavPopup () {
        setIsPopupOpen(false);
    }

    return (
        <section className='header'>
            <img className='header__logo' src={logo} alt='Лоотип'/>
            <div className='header__links'>
                <Link to='/movies' className='link header__link'>Фильмы</Link>
                <Link to='/saved-movies' className='link header__link'>Сохранённые фильмы</Link>
            </div>
            <div className='header__accountBox'>
                <p className='header__text'>Аккаунт</p>
                <img className='header__account' src={account} alt='Лоотип' />
                <img 
                    className='button header__button-popup' 
                    src={buttonPopup} alt='Лоотип' 
                    onClick={handleNavPopupClick}
                />
            </div>
            <NavPopup 
                isOpen={isNavPopupOpen}
                onClose={closeNavPopup} 
            />
        </section>
    );
  }

export default Header;