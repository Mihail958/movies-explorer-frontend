import '../NavPopup/NavPopup.css';
import { Link } from 'react-router-dom';
import account from '../../images/profile.svg';

function NavPopup({isOpen, onClose}) {
    return (
      <div className={`nav-popup ${isOpen && "popup_visible"}`}>
        <div className="nav-popup__background" />
        <div className="nav-popup__container">
          <button
            className="button nav-popup__close-button"
            onClick={onClose}
            type="button"
          />
          <div className="nav-popup__link-box">
            <Link to="/" className="link nav-popup__link">
              Главная
            </Link>
            <Link
              to="/movies"
              className="link nav-popup__link"
              onClick={onClose}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className="link nav-popup__link"
              onClick={onClose}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div className="nav-popup__accountBox">
            <Link to="/profile">
              <img
                className="link nav-popup__account"
                src={account}
                alt="Лоотип"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default NavPopup;