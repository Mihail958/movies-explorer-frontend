import "../MainHeader/MainHeader.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <section className="main-header them__olive">
      <img className="main-header__logo" src={logo} alt="Лоотип" />
      <div className="main-header__text">
        <Link to="/signup" className="link main-header__registration">
          Регистрация
        </Link>
        <Link to="/signin" className="link main-header__enter">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default MainHeader;
