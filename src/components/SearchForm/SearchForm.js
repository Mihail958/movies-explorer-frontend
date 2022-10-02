import '../SearchForm/SearchForm.css';

function SearchForm() {
    return (
        <form className='searchForm'>
           <div className='searchForm__box'>
                <input className='searchForm__input' placeholder="Фильм" required/>
                <button className='button searchForm__search-button'/>
           </div>
           <div className='searchForm__switch-box'>
                <p className='searchForm__text'>Короткометражки</p>
                <button className='button searchForm__switch-button searchForm__switch-button-active'/>
           </div>
           <hr className='searchForm__line' />
        </form>
    );
  }

export default SearchForm;