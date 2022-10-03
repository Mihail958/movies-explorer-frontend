import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies() {
    return (
      <div className='movies'>
        <Header />
        <main>
          <SearchForm />
          <MoviesCardList />
        </main>
        <Footer />
      </div>
    );
  }

export default Movies;
