import React from 'react';
import '../SearchForm/SearchForm.css';

function SearchForm() {
     const [isSwitchButton, setIsSwitchButton] = React.useState(false);

     function handleSwitchButtonClick () {
          if (isSwitchButton === false) {
               setIsSwitchButton(true);
          } else {
               setIsSwitchButton(false);
          }
          
      }
     
    return (
        <form className='searchForm'>
           <div className='searchForm__box'>
                <input className='searchForm__input' placeholder="Фильм"/>
                <button className='button searchForm__search-button' type='button'/>
           </div>
           <div className='searchForm__switch-box'>
                <p className='searchForm__text'>Короткометражки</p>
                <button
                    className={`button searchForm__switch-button ${isSwitchButton && 'searchForm__switch-button-active'}`}
                    onClick={handleSwitchButtonClick}
                    type='button'
                />
           </div>
           <hr className='searchForm__line' />
        </form>
    );
  }

export default SearchForm;