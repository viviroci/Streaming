import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import './ListaMovies.css';
import useMovieStatus from '../hooks/useMovieStatus/useCustomHook';  // Asegúrate de importar el hook correctamente

const ListaMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="lista-movies">
      <h1>ListaMovies Component</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ListaMovies;


