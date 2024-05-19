//home 

import React, { useState } from 'react';
import Navbar from './Navbar';
import Buscador from './Buscador';
import Catalogo from './Catalogo';
import moviesData from '../data';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState(moviesData);

  const handleSearch = (searchTerm) => {
    const filteredMovies = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleSearchByCategory = (category) => {
    const filteredMovies = moviesData.filter(movie =>
      movie.category.toLowerCase() === category.toLowerCase()
    );
    setMovies(filteredMovies);
  };

  const handleSearchByStars = (stars) => {
    const filteredMovies = moviesData.filter(movie =>
      movie.stars === parseInt(stars, 10)
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="home">
      <Navbar />
      <Buscador
        onSearch={handleSearch}
        onSearchByCategory={handleSearchByCategory}
        onSearchByStars={handleSearchByStars}
      />
      <Catalogo movies={movies} />
    </div>
  );
};

export default Home;
