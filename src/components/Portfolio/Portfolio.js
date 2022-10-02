import '../Portfolio/Portfolio.css';
import linkimg from '../../images/linkimg.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <ul className='portfolio__list'>
                <li>
                    <h3 className='portfolio__header'>Портфолио</h3>
                    <a className='link portfolio__link' href='https://mihail958.github.io/how-to-learn/' target="_blank">
                        <p className='portfolio__link-text'>Статичный сайт</p>
                        <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
                        <hr className='portfolio__linkLine'/>
                    </a>
                </li>
                <li>
                    <a className='link portfolio__link' href='https://mihail958.github.io/russian-travel/' target="_blank">
                        <p className='portfolio__link-text'>Адаптивный сайт</p>
                        <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
                        <hr className='portfolio__linkLine'/>
                    </a>
                </li>
                <li>
                    <a className='link portfolio__link' href=' https://domainname.mikhail.nomoredomains.sbs/' target="_blank">
                        <p className='portfolio__link-text'>Одностраничное приложение</p>
                        <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
                    </a>
                </li>
            </ul>
        </section>
    );
  }

export default Portfolio;