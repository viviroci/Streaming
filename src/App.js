// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carrito from './components/Carrito';
import CarritoProvider from './context/CarritoContext';
import './App.css';

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </Router>
    </CarritoProvider>
  );
};

export default App;
