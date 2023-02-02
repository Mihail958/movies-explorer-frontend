import '../AboutProject/AboutProject.css';

function AboutProject() {
    return (
      <section className="aboutProject">
        <h2 className="aboutProject__title">
          О проекте <hr className="aboutProject__line" />
        </h2>
        <div className="aboutProject__box">
          <div className="aboutProject__column">
            <h3 className="aboutProject__heading">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutProject__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutProject__column">
            <h3 className="aboutProject__heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutProject__timeband">
          <h3 className="aboutProject__firstweek">
            1 неделя<p className="aboutProject__back-end">Back-end</p>
          </h3>
          <h3 className="aboutProject__4weeks">
            4 недели<p className="aboutProject__front-end">Front-end</p>
          </h3>
        </div>
      </section>
    );
  }

export default AboutProject;