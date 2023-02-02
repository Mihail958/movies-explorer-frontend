import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/profile.svg';
import buttonPopup from '../../images/button-popup.svg';
import { Link } from 'react-router-dom'; 
import NavPopup from '../NavPopup/NavPopup';
import { useLocation } from "react-router-dom";


function Header() {
    const [isNavPopupOpen, setIsPopupOpen] = React.useState(false);
    const location = useLocation();
    const landing = location.pathname === "/";

    function handleNavPopupClick () {
        setIsPopupOpen(true);
    }

    function closeNavPopup () {
        setIsPopupOpen(false);
    }

    return (
      <section className={`header ${landing && 'them__olive'}`}>
        <Link to="/">
          <img
            className="button header__logo"
            type="button"
            src={logo}
            alt="Лоотип"
          />
        </Link>
        <div className="header__links">
          <Link to="/movies" className="link header__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="link header__link">
            Сохранённые фильмы
          </Link>
        </div>
        <div className="header__accountBox">
          <Link to="/profile">
            <img className="link header__account" src={account} alt="Лоотип" />
          </Link>
          <img
            className="button header__button-popup"
            src={buttonPopup}
            alt="Лоотип"
            onClick={handleNavPopupClick}
            type="button"
          />
        </div>
        <NavPopup isOpen={isNavPopupOpen} onClose={closeNavPopup} />
      </section>
    );
  }

export default Header;