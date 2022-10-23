import "../AboutMe/AboutMe.css";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <section className="aboutMe them__dark">
      <h2 className="aboutMe__title">
        Студент
        <hr className="aboutMe__titleLine" />
      </h2>
      <div className="aboutMe__box">
        <div className="aboutMe__info">
          <p className="aboutMe__name">Михаил</p>
          <p className="aboutMe__education">Фронтенд-разработчик, 28 лет</p>
          <p className="aboutMe__about">
            Я родился и живу в Санкт-Петербурге, закончил Военный институт
            (Инженерно-технический) . Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2013 года был военнослужащим. После
            того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="link aboutMe__git"
            href="https://github.com/Mihail958"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;
