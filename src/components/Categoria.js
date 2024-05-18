import React from 'react';
import './Categoria.css';

const Categoria = ({ category, movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }
  const filteredMovies = movies.filter(movie => movie.category === category);

  return (
    <div className="categoria">
      <h1>Categoria Component</h1>
      <h2 className="categoria__header">{category}</h2>
      <div className="categoria__list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="categoria__item">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;


