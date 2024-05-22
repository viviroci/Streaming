import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import carritoImg from '../Imagenes/carrito.png';  // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__brand">CineStream</span>
      </div>
      <div className="navbar__center">
        <Link to="/" className="navbar__link">Home</Link>
      </div>
      <div className="navbar__right">
        <Link to="/carrito" className="navbar__link">
          <img src={carritoImg} alt="Carrito" className="navbar__carrito-img" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
