import '../MoviesCardList/MoviesCardList.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import {
    SCREEN_SIZE_1204,
    SCREEN_SIZE_768,
    SCREEN_SIZE_767,
    DISPLAY_MOVIES_12,
    DISPLAY_MOVIES_8,
    DISPLAY_MOVIES_5,
    ADD_MOVIES_3,
    ADD_MOVIES_2
} from '../../utils/constants';

function MoviesCardList(props) {
  const location = useLocation();
  const pathSavedMovies = location.pathname === "/saved-movies";
  const pathMovies = location.pathname === "/movies";
  const notFilms = "Ничего не найдено";
  const windowSizeMax = window.innerWidth >= SCREEN_SIZE_1204 && DISPLAY_MOVIES_12;
  const windowSizeMiddle =
    window.innerWidth <= SCREEN_SIZE_1204 && window.innerWidth >= SCREEN_SIZE_768 && DISPLAY_MOVIES_8;
  const windowSizeMin = window.innerWidth <= SCREEN_SIZE_767 && DISPLAY_MOVIES_5;
  const condition =
    windowSizeMax ||
    windowSizeMiddle ||
    windowSizeMin;
  const [countMovies, setCountMovies] = useState(condition);

  function loreMore() {
    if (window.innerWidth > SCREEN_SIZE_1204) {
      setCountMovies(countMovies + ADD_MOVIES_3);
    } else if (window.innerWidth <= SCREEN_SIZE_1204) {
      setCountMovies(countMovies + ADD_MOVIES_2);
    } else {
      setCountMovies(countMovies + ADD_MOVIES_2);
    }
  }

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid-container">
        {props.onChecked && ((pathMovies && props.movies && props.movies.length != 0) ||
        (pathSavedMovies && props.saveMovies && props.saveMovies.length != 0))
          ? props.shortMovies === null  ||
            props.shortMovies.map((shortMovie) => {
              return (
                <MoviesCard
                  key={shortMovie.id || shortMovie.movieId}
                  {...shortMovie}
                  pathSavedMovies={pathSavedMovies}
                  onSaveMovie={props.onSaveMovie}
                  saveMovies={props.saveMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })
          : pathSavedMovies
          ? props.saveMovies.map((saveMovie) => {
              return (
                <MoviesCard
                  key={saveMovie.id || saveMovie.movieId}
                  {...saveMovie}
                  saveMovies={props.saveMovies}
                  pathSavedMovies={pathSavedMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })
          : props.movies === null ||
            props.movies.slice(0, countMovies).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  {...movie}
                  pathSavedMovies={pathSavedMovies}
                  onSaveMovie={props.onSaveMovie}
                  saveMovies={props.saveMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })} 

        {(pathMovies && props.movies && props.movies.length === 0) ||
        (pathSavedMovies && props.saveMovies && props.saveMovies.length === 0) ? (
          <p className="moviesCardList__not-found">{notFilms}</p>
        ) : null}
        {(props.onChecked && props.shortMovies.length === 0 ) ? (
          <p className="moviesCardList__not-found">{notFilms}</p>
        ) : null}
      </div>

      {(!pathSavedMovies &&
        props.movies &&
        props.movies.length < countMovies) || 
      pathSavedMovies ||
      props.onChecked ? null : (
        <button
          className="button moviesCardList__button-more"
          onClick={loreMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;