import React from 'react';
import MovieCard from './MovieCard';
import './Catalogo.css';

const Catalogo = ({ movies }) => {
  return (
    <div className="catalogo">
      {movies.map((pelicula) => (
        <MovieCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default Catalogo;
