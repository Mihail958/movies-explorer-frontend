import '../MoviesCardList/MoviesCardList.css';
import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';
import film5 from '../../images/film5.png';
import film6 from '../../images/film6.png';
import film7 from '../../images/film7.png';
import film8 from '../../images/film8.png';
import film9 from '../../images/film9.png';
import film10 from '../../images/film10.png';
import film11 from '../../images/film11.png';
import film12 from '../../images/film12.png';

function MoviesCardList() {
    return (
        <div className='moviesCardList'>
          <div className='moviesCardList__grid-container'>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites moviesCardList__button-favourites-active' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card'  src={film1} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film2} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film3} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film4} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film5} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film6} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film7} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film8} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film9} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film10} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film11} />
            </div>
            <div className='moviesCardList__card'>
              <div className='moviesCardList__box-heading'>
                  <p className='moviesCardList__heading'>33 слова о дизайне</p>
                  <button className='button moviesCardList__button-favourites' />
                  <p className='moviesCardList__duration'>1ч 47м</p>
              </div>
              <img className='moviesCardList__card-img' alt='card' src={film12} />
            </div>
          </div>
          <button className='button moviesCardList__button-more'>Ещё</button>
        </div>
    );
  }

export default MoviesCardList;