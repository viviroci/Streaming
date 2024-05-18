// MovieCard.js
import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './MovieCard.css';

const MovieCard = ({ pelicula }) => {
  const { onRent, onPurchase } = useContext(CarritoContext);

  return (
    <div className="movie-card">
      <h2>{pelicula.title}</h2>
      <p>{pelicula.description}</p>
      <img src={pelicula.image} alt={pelicula.title} />
      <p>Director: {pelicula.director}</p>
      <p>Año: {pelicula.year}</p>
      <p>Críticas: {pelicula.reviews}</p>
      <p>Duración: {pelicula.duration} minutos</p>
      <p>Categoría: {pelicula.category}</p>
      <p>Estrellas: {pelicula.stars}</p>
      <a href={pelicula.trailer} target="_blank" rel="noopener noreferrer">Ver Tráiler</a>
      <button onClick={() => onRent(pelicula)}>Alquilar</button>
      <button onClick={() => onPurchase(pelicula)}>Comprar</button>
    </div>
  );
};

export default MovieCard;


