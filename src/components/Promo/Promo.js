import "../Promo/Promo.css";
import logo from "../../images/text__COLOR_landing-logo.png";

function Promo() {
  return (
    <section className="promo them__olive">
      <h1 className="promo__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__container">
        <img className="promo__logo" src={logo} alt="Лоотип" />
      </div>
    </section>
  );
}

export default Promo;
