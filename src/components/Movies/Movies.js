import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
    return (
      <div className='movies'>
        <Header />
        <main>
          <SearchForm 
            movies={props.movies}
            enterHandler={props.handleEnter}
            checkShortFilms={props.checkShortFilms}
            onCheckedFilms={props.onCheckedFilms}
            pathMovies={props.pathMovies}
            setIsFiltered={props.setIsFiltered}
            valueSearch={props.valueSearch}
            setIsFilteredSaveReset={props.setIsFilteredSaveReset}
          />
          {props.loaded ? (
        <Preloader />
        ) : (
          <MoviesCardList
            movies={props.isFiltered ? props.filterMovies : props.movies}
            shortMovies={props.isFiltered ? props.filterMovies : props.shortMovies}
            onSaveMovie={props.handleSaveMovie}
            saveMovies={props.saveMovies}
            handleDeleteSaveMovie={props.handleDeleteSaveMovie}
            onChecked={props.onCheckedFilms}
            filterMovies={props.filterMovies}
            isFiltered={props.isFiltered}
          />
        )}
        </main>
        <Footer />
      </div>
    );
  }

export default Movies;
