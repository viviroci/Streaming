import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__link">Home</Link>
      </div>
      <div className="navbar__right">
        <Link to="/carrito" className="navbar__link">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;

