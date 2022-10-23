class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkServerResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);
    }
  
    getMovies() {
      return fetch(this._baseUrl, {
        headers: this._headers,
      }).then((res) => this._checkServerResponse(res));
    }
  }
  
  const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default moviesApi;