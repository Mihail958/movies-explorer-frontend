import '../App/App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from "../NotFound/NotFound";

import { CurrentUserContext } from "../context/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import BlockRouteUser from "../BlockRouteUser/BlockRouteUser";
import {SHORT_FILM} from '../../utils/constants';

function App() {
  const valueData = JSON.parse(localStorage.getItem("moviesSearchValue"));
  const location = useLocation();
  const history = useHistory();
  const [isLoginMessage, setLoginMessage] = useState("");
  const [isRegisterMessage, setRegisterMessage] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);
  const [saveFilterSaveMovies, setFilterSaveMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [shortMoviesSave, setShortMoviesSave] = useState([]);
  const [valueSearch, setValueSearch] = useState(valueData);
  const [loaded, setLoaded] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isFilteredSave, setIsFilteredSave] = useState(false);
  const [checkedFilms, setCheckedFilms] = useState(false);
  const [checkedSaveFilms, setCheckedSaveFilms] = useState(false);
  const [permissonCheck, setPermissonCheck] = useState(false);
  const pathMovies = location.pathname === "/movies";
  const pathMoviesSave = location.pathname === "/saved-movies";

  // проверка токенов авторизованных пользователей, вернувшихся в приложение
  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .examinationValidationToken(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          localStorage.setItem("user", JSON.stringify(res));
        })
        .catch((err) => {
          handleSignOut();
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }

  // Загрузка данных пользователя и фильмов
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      if (loggedIn) {
        Promise.all([
          moviesApi.getMovies(),
          mainApi.getAboutUser(),
          mainApi.getSaveMovies(),
        ])
          .then(([movies, user, saveMovies]) => {
            localStorage.setItem("user", JSON.stringify(user));
            setCurrentUser(JSON.parse(localStorage.getItem("user")));
            const userSaveMovie = saveMovies.filter(
              (movie) => movie.owner === user._id
            );
            localStorage.setItem("saveMovies", JSON.stringify(userSaveMovie));
            const before = movies.slice(0, 23);
            const after = movies.slice(24);
            const arrMovies = before.concat(after);
            localStorage.setItem("allMovies", JSON.stringify(arrMovies));
            setSaveMovies(JSON.parse(localStorage.getItem("saveMovies")));
            setMovies(JSON.parse(localStorage.getItem("allMovies")));
            setLoaded(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, 1000);
  }, [loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setPermissonCheck(true);
      return;
    }
    checkToken();
    setPermissonCheck(true);
    setLoggedIn(true);
    setCheckedFilms(JSON.parse(localStorage.getItem("checkedFilms")));
    setCheckedSaveFilms(JSON.parse(localStorage.getItem("checkedSaveFilms")));
  }, []);

  useEffect(() => {
    setFilterMovies(JSON.parse(localStorage.getItem("moviesSearch")));
    setFilterSaveMovies(JSON.parse(localStorage.getItem("saveMovies")));
  }, []);

  // Обновление короткометражек
  useEffect(() => {
    setShortMovies(JSON.parse(localStorage.getItem("durationMovieShort")));
    setShortMoviesSave(
      JSON.parse(localStorage.getItem("durationMovieShortSave"))
    );
  }, []);

  // Поиск фильмов
  function handleEnter(search) {
    if (!checkedFilms) {
      const moviesFilter = movies
      ? movies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        })
      : [];
      localStorage.setItem("moviesSearch", JSON.stringify(moviesFilter));
      localStorage.setItem("isFiltered", JSON.stringify(true));
      localStorage.setItem("moviesSearchValue", JSON.stringify(search));
      setTimeout(() => {
        setLoaded(false);
        setFilterMovies(JSON.parse(localStorage.getItem("moviesSearch")));
        setIsFiltered(JSON.parse(localStorage.getItem("isFiltered")));
        setValueSearch(
          JSON.parse(window.localStorage.getItem("moviesSearchValue"))
        );
      }, 450);
    } else {
      setShortMovies(JSON.parse(localStorage.getItem("durationMovieShort")));
      const moviesFilter = shortMovies
      ?shortMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        })
      : [];
      localStorage.setItem("moviesSearch", JSON.stringify(moviesFilter));
      localStorage.setItem("isFiltered", JSON.stringify(true));
      localStorage.setItem("moviesSearchValue", JSON.stringify(search));
      setTimeout(() => {
        setLoaded(false);
        setFilterMovies(JSON.parse(localStorage.getItem("moviesSearch")));
        setIsFiltered(JSON.parse(localStorage.getItem("isFiltered")));
        setValueSearch(
          JSON.parse(window.localStorage.getItem("moviesSearchValue"))
        );
      }, 450);
    }
    
  }

  // Поиск сохраненных фильмов
  function handleSearchSaveMovie(search) {
    if (!checkedSaveFilms) {
      const moviesSaveFilter = saveMovies
      ? saveMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        })
      : [];
      localStorage.setItem("isFilteredSave", JSON.stringify(true));
      setTimeout(() => {
        setLoaded(false);
        setFilterSaveMovies(moviesSaveFilter);
        setIsFilteredSave(JSON.parse(localStorage.getItem("isFilteredSave")));
      }, 450);
    } else {
      setShortMoviesSave(
        JSON.parse(localStorage.getItem("durationMovieShortSave"))
      );
      const moviesSaveFilter = shortMoviesSave
      ? shortMoviesSave.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        })
      : [];
      localStorage.setItem("isFilteredSave", JSON.stringify(true));
      setTimeout(() => {
        setLoaded(false);
        setFilterSaveMovies(moviesSaveFilter);
        setIsFilteredSave(JSON.parse(localStorage.getItem("isFilteredSave")));
      }, 450);
    }
  }

  // Сброс значения  массива IsFiltered и IsFilteredSave
  function setIsFilteredSaveReset() {
    setIsFilteredSave(false);
    setIsFiltered(false);
  }


  // Сохранение фильма
  function handleSaveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((newMovie) => {
        setSaveMovies([...saveMovies, newMovie]);
        localStorage.setItem(
          "saveMovies",
          JSON.stringify([...saveMovies, newMovie])
        );
        setShortMoviesSave(JSON.parse(localStorage.getItem("saveMovies")).filter(
          (movie) => movie.duration <= SHORT_FILM
        ));
        setFilterSaveMovies(JSON.parse(localStorage.getItem("saveMovies")));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Функция удаления из избранного
  function handleDeleteSaveMovie(saveMovie) {
    mainApi
      .deleteMovie(saveMovie._id || saveMovie.id)
      .then(() => {
        const newCardsArr = saveMovies.filter((c) => c._id !== saveMovie._id);
        const newShotCardsArr = shortMoviesSave.filter((c) => c._id !== saveMovie._id);
        const newSavedCardsArr = saveMovies.filter(
          (c) => c._id !== saveMovie._id
        );
        setSaveMovies(newCardsArr);
        setShortMoviesSave(newShotCardsArr);
        setFilterSaveMovies(newSavedCardsArr);
        setIsFilteredSave(false);
        localStorage.removeItem("saveMovies", JSON.stringify(newCardsArr));
        localStorage.removeItem("shortMoviesSave", JSON.stringify(newShotCardsArr));
        localStorage.removeItem("saveMovies", JSON.stringify(newSavedCardsArr));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Регистрация
  function handleRegistration(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleAuthorization(email, password);
          history.push("/movies");
          setRegisterMessage("");
        }
      })
      .catch((err) => {
        err.status !== 400
          ? setRegisterMessage("Пользователь с таким email уже зарегистрирован")
          : setRegisterMessage(
              "При регистрации пользователя произошла ошибка."
            );
        console.log(err);
      });
  }

  // Авторизация
  function handleAuthorization(emailLogin, passwordLogin) {
    auth
      .authorization(emailLogin, passwordLogin)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("moviesSearch", JSON.stringify(filterMovies));
          window.localStorage.setItem(
            "moviesSearchValue",
            JSON.stringify(valueSearch)
          );
          setLoggedIn(true);
          history.push("/movies");
          setLoginMessage("");
        }
      })
      .then(() => {
        checkToken();
      })
      .catch((err) => {
        setLoginMessage("Вы ввели неправильный логин или пароль.");
        console.log(err);
      });
  }

  // Обновление пользователя
  function handleUpdateUser(user) {
    mainApi
      .editProfile(user)
      .then((user) => {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        console.log(`Внимание! ${err}`);
      });
  }

  // Короткометражки фильмов
  function checkShortFilms(e) {
    setLoaded(true);
    localStorage.setItem("checkedFilms", JSON.stringify(!checkedFilms));
    setTimeout(() => {
      if (!checkedFilms) {
        const durationMovieShort = movies.filter(
          (movie) => movie.duration <= SHORT_FILM
        );
        const durationMovieShortSearch = filterMovies.filter(
          (movie) => movie.duration <= SHORT_FILM
        );
        localStorage.setItem(
          "durationMovieShort",
          JSON.stringify(durationMovieShort)
        );
        localStorage.setItem(
          "durationMovieShortSearch",
          JSON.stringify(durationMovieShortSearch)
        );
        setShortMovies(JSON.parse(localStorage.getItem("durationMovieShortSearch")));
      } else {
        setMovies(movies);
      }
      setLoaded(false);
    }, 450);
    setCheckedFilms(!checkedFilms);
  }

  // Короткометражки сохраненных фильмов
  function checkShortFilmsSave() {
    setLoaded(true);
    localStorage.setItem("checkedSaveFilms", JSON.stringify(!checkedSaveFilms));
    setTimeout(() => {
      if (!checkedSaveFilms) {
        const durationMovieShortSave = saveMovies.filter(
          (movie) => movie.duration <= SHORT_FILM
        );
        const durationMovieShortSaveSearch = saveFilterSaveMovies.filter(
          (movie) => movie.duration <= SHORT_FILM
        );

        localStorage.setItem(
          "durationMovieShortSave",
          JSON.stringify(durationMovieShortSave)
        );
        localStorage.setItem(
          "durationMovieShortSaveSearch",
          JSON.stringify(durationMovieShortSaveSearch)
        );
        setShortMoviesSave(
            JSON.parse(localStorage.getItem("durationMovieShortSaveSearch"))
          );
      } else {
        setSaveMovies(saveMovies);
      }
      setLoaded(false);
    }, 450);
    setCheckedSaveFilms(!checkedSaveFilms);
  }

  // Выход
  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser([]);
    setCheckedFilms(false);
    setCheckedSaveFilms(false);
    localStorage.clear();
    history.push("/");
  }

  if (!permissonCheck) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            handleEnter={handleEnter}
            loaded={loaded}
            isFiltered={isFiltered}
            movies={movies}
            filterMovies={filterMovies}
            handleSaveMovie={handleSaveMovie}
            saveMovies={saveMovies}
            handleDeleteSaveMovie={(movie) => handleDeleteSaveMovie(movie)}
            checkShortFilms={checkShortFilms}
            onCheckedFilms={checkedFilms}
            shortMovies={shortMovies}
            pathMovies={pathMovies}
            valueSearch={valueSearch}
            setIsFilteredSaveReset={setIsFilteredSaveReset}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            loaded={loaded}
            handleSearchSaveMovie={handleSearchSaveMovie}
            isFilteredSave={isFilteredSave}
            saveMovies={saveMovies}
            handleDeleteSaveMovie={handleDeleteSaveMovie}
            saveFilterSaveMovies={saveFilterSaveMovies}
            checkShortFilmsSave={checkShortFilmsSave}
            onCheckedSaveFilms={checkedSaveFilms}
            shortMovies={shortMoviesSave}
            pathMoviesSave={pathMoviesSave}
            setIsFilteredSaveReset={setIsFilteredSaveReset}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onUpdateUser={handleUpdateUser}
            handleSignOut={handleSignOut}
            loggedIn={loggedIn}
          />
          <BlockRouteUser
            path="/signin"
            component={Login}
            handleAuthorization={handleAuthorization}
            loggedIn={loggedIn}
            isLoginMessage={isLoginMessage}
            setLoginMessage={setLoginMessage}
          />
          <BlockRouteUser
            path="/signup"
            component={Register}
            handleRegistration={handleRegistration}
            loggedIn={loggedIn}
            isRegisterMessage={isRegisterMessage}
            setRegisterMessage={setRegisterMessage}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
