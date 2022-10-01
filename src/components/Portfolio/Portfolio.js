import '../Portfolio/Portfolio.css';
import linkimg from '../../images/linkimg.png';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h3 className='portfolio__header'>Портфолио</h3>
            <a className='link portfolio__link' href='https://mihail958.github.io/how-to-learn/'>
                <p className='portfolio__link-text'>Статичный сайт</p>
                <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
                <hr className='portfolio__linkLine'/>
            </a>
            <a className='link portfolio__link' href='https://mihail958.github.io/russian-travel/'>
                <p className='portfolio__link-text'>Адаптивный сайт</p>
                <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
                <hr className='portfolio__linkLine'/>
            </a>
            <a className='link portfolio__link' href=' https://domainname.mikhail.nomoredomains.sbs/'>
                <p className='portfolio__link-text'>Одностраничное приложение</p>
                <img className='portfolio__linkimg' src={linkimg} alt='Стрелочка'/>
            </a>
        </div>
    );
  }

export default Portfolio;