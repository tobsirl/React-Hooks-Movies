import React, { useState } from 'react';

import Movie from './Movie';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

// OMDB API key
// const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=8fc593f4';

const MovieList = ({ movieList }) => {
  const [mov, setMov] = useState([]);

  const apiKey = '8fc593f4';

  const getMovie = id => {
    console.log(id);
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then(res => res.json())
      .then(jsonRes => setMov(jsonRes));
  };

  const poster =
    movieList.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movieList.Poster;
  return (
    <div className="list">
      <h2>{movieList.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movieList.Title}`}
          src={poster}
          onClick={getMovie.bind(this, movieList.imdbID)}
        />
      </div>

      <p>({movieList.Year})</p>
      <Movie movie={movieList} />
    </div>
  );
};
export default MovieList;
