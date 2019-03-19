import React, { useReducer, useEffect } from 'react';
import './App.css';

// Import the components
import Header from './Header';
import MovieList from './MovieList';
import Search from './Search';

// OMDB API key
const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=8fc593f4';

const initialState = {
  loading: true,
  movieList: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  // using new react hooks useState
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect use to make the api call using fetch
  // second argument make useEffect behave like componentDidMount
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search
        });
        // setMovies(jsonResponse.Search);
        // setLoading(false);
      });
  }, []);

  const search = searchValue => {
    // setLoading(true);
    // setErrorMessage(null);
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=8fc593f4`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search
          });
          // setMovies(jsonResponse.Search);
          // setLoading(false);
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error
          });
          // setErrorMessage(jsonResponse.Error);
          // setLoading(false);
        }
      });
  };

  const { movies, errorMessage, loading } = state; // destructuring

  return (
    <div className="App">
      <Header text="Movies" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <MovieList key={`${index}-${movie.Title}`} movieList={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
