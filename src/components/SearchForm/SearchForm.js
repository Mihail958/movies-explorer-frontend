import '../SearchForm/SearchForm.css';

function SearchForm() {
    return (
        <div className='searchForm'>
           <div className='searchForm__box'>
                <input className='searchForm__input' placeholder="Фильм"/>
                <button className='button searchForm__search-button'/>
           </div>
           <div className='searchForm__switch-box'>
                <p className='searchForm__text'>Короткометражки</p>
                <button className='button searchForm__switch-button'/>
           </div>
           <hr className='searchForm__line' />
        </div>
    );
  }

export default SearchForm;