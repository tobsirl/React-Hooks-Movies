import React, { useState, useEffect } from 'react';
import './App.css';

// Import the components
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

// OMDB API key
const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8fc593f4';

const App = () => {
  // using new react hooks useState
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect use to make the api call using fetch
  // second argument make useEffect behave like componentDidMount
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Header</h2>
      </header>
    </div>
  );
};

export default App;
