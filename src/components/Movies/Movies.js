import '../Movies/Movies.css';
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
      <div className='movies'>
        <NavBar />
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </div>
    );
  }

export default Movies;
