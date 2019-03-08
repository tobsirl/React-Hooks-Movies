import React, { Component } from 'react';
import './App.css';

// Import the components
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

// OMDB API key
const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8fc593f4';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Header</h2>
      </header>
    </div>
  );
};

export default App;
