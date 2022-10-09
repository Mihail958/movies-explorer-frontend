import "../Footer/Footer.css";

function Footer() {
  return (
    <section className="footer them__dark">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className="footer__line" />
      <div className="footer__box">
        <p className="footer__date"> &copy;2022</p>
        <div className="footer__linkBox">
          <a
            className="link footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="link footer__link"
            href="https://github.com/Mihail958"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
