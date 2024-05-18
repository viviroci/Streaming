import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import DetallesPelicula from '../components/DetallesPelicula';
import ListaMovies from '../components/ListaMovies';
import Categoria from '../components/Categoria';
import DefaultComponent from '../components/DefaultComponent';


const AppRouter = () => {
  return (
    <Router>
      <div className="router-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetallesPelicula />} />
          <Route path="/list" element={<ListaMovies />} />
          <Route path="/category/:name" element={<Categoria />} />
          <Route path="*" element={<DefaultComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;






