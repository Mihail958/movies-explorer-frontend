import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
    return (
      <div className='movies'>
        <Header />
        <main>
          <SearchForm 
            enterHandler={props.handleSearchSaveMovie}
            checkShortFilmsSave={props.checkShortFilmsSave}
            onCheckedSaveFilms={props.onCheckedSaveFilms}
            pathMoviesSave={props.pathMoviesSave}
          />
          {props.loaded ? (
        <Preloader />
        ) : (
          <MoviesCardList
            saveMovies={
              props.isFilteredSave ? props.saveFilterSaveMovies : props.saveMovies
            }
            handleDeleteSaveMovie={props.handleDeleteSaveMovie}
            shortMovies={props.shortMovies}
            onSaveMovie={props.handleSaveMovie}
            onChecked={props.onCheckedSaveFilms}
        />
      )}
        </main>
        <Footer />
      </div>
    );
  }

export default SavedMovies;