import '../SearchForm/SearchForm.css';
import React, { useState } from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
     
     const [searchFilmValue, setSearchFilmValue] = useState(
          props.valueSearch || ""
        );
        const [searchFilmError, setSearchFilmError] = useState(
          "Нужно ввести ключевое слово"
        );
      
        const [searchFilmDirty, setSearchFilmDirty] = useState(false);

      
        function handleChangeSearchFilm(e) {
          e.preventDefault();
          localStorage.setItem("moviesSearchValue", JSON.stringify(e.target.value));
          setSearchFilmValue(JSON.parse(localStorage.getItem("moviesSearchValue")));
      
          if (!e.target.validity.valid && e.target.value.length === 0) {
            setSearchFilmError("Нужно ввести ключевое слово");
          } else {
            setSearchFilmError("");
          }
        }
      
        function handleEnter(event) {
          event.preventDefault();
          props.enterHandler(searchFilmValue);
        }
      
        function blurHandler(e) {
          switch (e.target.name) {
            case "searchmovie":
              setSearchFilmDirty(true);
              break;
            default:
              break;
          }
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
            onBlur={blurHandler}
            required
          />
          {searchFilmDirty && searchFilmError && (
            <div className="">{searchFilmError}</div>
          )}
          <button
            className="button searchForm__search-button"
            type="submit"
            onClick={handleEnter}
          />
        </div>
        {props.pathMovies && (
          <FilterCheckbox
            checkShort={props.checkShortFilms}
            onChecked={props.onCheckedFilms}
          />
        )}
        {props.pathMoviesSave && (
          <FilterCheckbox
            checkShort={props.checkShortFilmsSave}
            onChecked={props.onCheckedSaveFilms}
          />
        )}
        <hr className="searchForm__line" />
      </form>
    );
  }

export default SearchForm;