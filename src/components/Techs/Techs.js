import '../Techs/Techs.css';

function Techs() {
    return (
        <div className='techs them__light'>
            <h2 className='techs__title'>Технологии<hr className='techs__line'/></h2>
            <p className='techs__heading'>7 технологий</p>
            <p className='techs__about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__box'>
                <div className='techs__container'>HTML</div>
                <div className='techs__container'>CSS</div>
                <div className='techs__container'>JS</div>
                <div className='techs__container'>React</div>
                <div className='techs__container'>Git</div>
                <div className='techs__container'>Express.js</div>
                <div className='techs__container'>mongoDB</div>
            </div>
        </div>
    );
  }

export default Techs;