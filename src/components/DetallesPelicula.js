import React from 'react';
import './DetallesPelicula.css';

const DetallesPelicula = ({ movie }) => {
  const handleRent = () => {
    alert(`You have rented ${movie.title}`);
  };

  const handleBuy = () => {
    alert(`You have bought ${movie.title}`);
  };

  return (
    <div className="detalles-pelicula">
      <h2 className="detalles-pelicula__titulo">{movie.title}</h2>
      <p className="detalles-pelicula__sinopsis">{movie.synopsis}</p>
      <p>Director: {movie.director}</p>
      <p>Año: {movie.year}</p>
      <p>Críticas: {movie.reviews}</p>
      <p>Duración: {movie.duration} minutos</p>
      <img src={movie.image} alt={movie.title} />
      <button onClick={handleRent}>Alquilar</button>
      <button onClick={handleBuy}>Comprar</button>
    </div>
  );
};

export default DetallesPelicula;



