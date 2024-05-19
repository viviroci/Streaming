import React, { useState } from 'react';
import './Buscador.css';

const Buscador = ({ onSearch, onSearchByCategory, onSearchByStars }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [stars, setStars] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleCategorySearch = () => {
    onSearchByCategory(category);
  };

  const handleStarsSearch = () => {
    onSearchByStars(stars);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="buscador__input"
      />
      <button onClick={handleSearch} className="buscador__button">Buscar</button>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="buscador__select--category"
      >
        <option value="">Selecciona una categoría</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Crime">Crime</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="War">War</option>
      </select>
      <button onClick={handleCategorySearch} className="buscador__button--category">Buscar por categoría</button>

      <select
        value={stars}
        onChange={(e) => setStars(e.target.value)}
        className="buscador__select--stars"
      >
        <option value="">Selecciona estrellas</option>
        <option value="5">5 Estrellas</option>
        <option value="4">4 Estrellas</option>
        <option value="3">3 Estrellas</option>
        <option value="2">2 Estrellas</option>
        <option value="1">1 Estrella</option>
      </select>
      <button onClick={handleStarsSearch} className="buscador__button--stars">Buscar por estrellas</button>
    </div>
  );
};

export default Buscador; // Asegúrate de exportar por defecto
