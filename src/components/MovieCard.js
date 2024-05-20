// MovieCard.js
import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './MovieCard.css';

const MovieCard = ({ pelicula }) => {
  const { onRent, onPurchase } = useContext(CarritoContext);
  const [showTrailer, setShowTrailer] = useState(false);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="movie-card" style={{ backgroundImage: `url(${pelicula.image})` }}>
      <div className="movie-card-content">
        <h2>{pelicula.title}</h2>
        <p>{pelicula.description}</p>
        <p>Director: {pelicula.director}</p>
        <p>Año: {pelicula.year}</p>
        <p>Críticas: {pelicula.reviews}</p>
        <p>Duración: {pelicula.duration} minutos</p>
        <p>Categoría: {pelicula.category}</p>
        <p>Estrellas: {pelicula.stars}</p>
        <button onClick={() => onRent(pelicula)}>Alquilar</button>
        <button onClick={() => onPurchase(pelicula)}>Comprar</button>
        <button onClick={() => setShowTrailer(!showTrailer)}>
          {showTrailer ? 'Ocultar Tráiler' : 'Ver Tráiler'}
        </button>
        {showTrailer && (
          <iframe
            width="560"
            height="315"
            src={getYouTubeEmbedUrl(pelicula.trailer)}
            title={pelicula.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
