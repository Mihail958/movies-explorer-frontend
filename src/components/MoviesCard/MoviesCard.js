import './MoviesCard.css';
import React, { useCallback, useEffect, useState } from "react";
import {HOUR} from '../../utils/constants';

function MoviesCard(props) {
    const [isCardFavouritesClicked, setIsCardFavouritesClicked] = useState(true);

  const setLikes = useCallback(() => {
    const likesCard = props.saveMovies.find(
      (movie) => movie.movieId === props.id
    );
    if (likesCard) {
      setIsCardFavouritesClicked(true);
    } else {
      setIsCardFavouritesClicked(false);
    }
  }, [props.id, props.saveMovies]);

  useEffect(() => {
    setLikes();
  }, [setLikes]);

  const movieButtonFavouritesClassName = `button cardMovie__button-favourites ${
    isCardFavouritesClicked ? "cardMovie__button-favourites-active" : ""
  }`;

  const movieButtonDeleteClassName = `button cardMovie__delete`;
  function handleLikeClick(evt) {
    evt.stopPropagation();
    if (!isCardFavouritesClicked) {
      props.onSaveMovie({
        country: props.country || "default",
        director: props.director,
        duration: props.duration,
        year: props.year,
        description: props.description,
        image: props.image.url
          ? `https://api.nomoreparties.co/${props.image.url}`
          : "https://www.youtube.com",
        trailerLink: props.trailerLink,
        movieId: props.id,
        nameRU: props.nameRU,
        nameEN: props.nameEN,
        thumbnail: props.image.formats.thumbnail.url
          ? `https://api.nomoreparties.co/${props.image.formats.thumbnail.url}`
          : "https://www.youtube.com",
        owner: props.owner,
      });
      setIsCardFavouritesClicked(true);
    } else {
      const saveCard = props.saveMovies.find(
        (movie) => movie.movieId === props.id
      );
      props.handleDeleteSaveMovie(saveCard);
      setIsCardFavouritesClicked(false);
    }
  }

  function handleDeleteClick(evt) {
    props.handleDeleteSaveMovie(props);
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / HOUR);
    let minutes = mins % HOUR;
    return hours + "ч " + minutes + "м";
  }
  const style = {
    textDecoretion: "none",
  };

    return (
        <div className='cardMovie__card'>
            <div className='cardMovie__box-heading'>
                <p className='cardMovie__heading'>{props.nameRU}</p>
                <button 
                    className={
                        props.pathSavedMovies
                          ? movieButtonDeleteClassName
                          : movieButtonFavouritesClassName
                      }
                      type="button"
                      onClick={
                        props.pathSavedMovies ? handleDeleteClick : handleLikeClick
                      }
                />
                <p className='cardMovie__duration'>{getTimeFromMins(props.duration)}</p>
            </div>
            <a
                className={style}
                href={props.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    className='cardMovie__card-img' 
                    alt={props.nameRU}  
                    src={
                        !props.pathSavedMovies
                          ? `https://api.nomoreparties.co/${props.image.url}`
                          : props.image
                    }
                />
            </a>
        </div>  
    );
}

export default MoviesCard;