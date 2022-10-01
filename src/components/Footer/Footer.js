import '../Footer/Footer.css';

function Footer() {
    return (
        <div className='footer them__dark'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className='footer__line'/>
            <div className='footer__box'>
                <p className='footer__date'> &copy;2022</p>
                <div className='footer__linkBox'>
                    <a className='link footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
                    <a className='link footer__link' href='https://github.com/Mihail958'>Github</a>
                </div>
            </div>
        </div>
    );
  }

export default Footer;