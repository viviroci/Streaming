import React from 'react';
import './Movie.css';

const Movie = ({ movie, onRent, onPurchase }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Año: {movie.year}</p>
      <p>Críticas: {movie.reviews}</p>
      <p>Duración: {movie.duration} minutos</p>
      <img src={movie.image} alt={movie.title} />
      <div>
        <button onClick={() => onRent(movie)}>Alquilar</button>
        <button onClick={() => onPurchase(movie)}>Comprar</button>
      </div>
    </div>
  );
};

export default Movie;


