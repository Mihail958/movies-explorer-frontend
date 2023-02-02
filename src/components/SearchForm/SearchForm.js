import '../SearchForm/SearchForm.css';
import React, { useState } from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
     const [searchFilmValue, setSearchFilmValue] = useState(
          props.valueSearch || ""
        );
      
      
        function handleChangeSearchFilm(e) {
          e.preventDefault();
          setSearchFilmValue(e.target.value);
          if (e.target.value === "") {
            props.enterHandler(searchFilmValue);
          }
        }
      
        function handleEnter(event) {
          event.preventDefault();
          props.enterHandler(searchFilmValue);
        }
      
        
     
    return (
      <form className="searchForm">
        <div className="searchForm__box">
          <input
            type="text"
            id="movie"
            className="searchForm__input"
            placeholder="Фильм"
            onChange={handleChangeSearchFilm}
            value={searchFilmValue || ""}
            onKeyUp={searchFilmValue ? null : handleEnter}
            required
          />
          <button
            className="button searchForm__search-button"
            type="submit"
            onClick={handleEnter}
          />
        </div>
        {props.pathMovies && (
          <FilterCheckbox
            checkShort={props.checkShortFilms} // функция переключения на короткометражки
            onChecked={props.onCheckedFilms} // состояние чекбокса
            onClick={handleEnter}
            setIsFilteredSaveReset={props.setIsFilteredSaveReset}
          />
        )}
        {props.pathMoviesSave && (
          <FilterCheckbox
            checkShort={props.checkShortFilmsSave} // функция переключения на короткометражки
            onChecked={props.onCheckedSaveFilms} // состояние чекбокса
            onClick={handleEnter}
            setIsFilteredSaveReset={props.setIsFilteredSaveReset}
          />
        )}
        <hr className="searchForm__line" />
      </form>
    );
  }

export default SearchForm;