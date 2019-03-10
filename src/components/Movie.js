import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

// OMDB API key
// const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=8fc593f4';

const getMovie = id => {
  console.log(id);
  fetch(`https://www.omdbapi.com/?apikey=8fc593f4&i=${id}`)
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes);
    });
};

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
          onClick={getMovie.bind(this, movie.imdbID)}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};
export default Movie;
