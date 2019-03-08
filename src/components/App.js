import React, { Component } from 'react';
import './App.css';

// Import the components
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Header</h2>
        </header>
      </div>
    );
  }
}

export default App;
