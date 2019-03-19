import React from 'react';

import Modal from './Modal/Modal';

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <Modal>
      <div>
        <h1>Hey {movie.Title}</h1>
      </div>
      {/* <Movie movie={movie} onClick={getMovie} /> */}
    </Modal>
  );
};

export default Movie;
