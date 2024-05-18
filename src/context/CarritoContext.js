// CarritoContext.js
import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pelicula) => {
    setCarrito([...carrito, pelicula]);
  };

  const onRent = (pelicula) => {
    // Lógica para alquilar una película
    console.log(`Alquilada: ${pelicula.title}`);
    agregarAlCarrito(pelicula);
  };

  const onPurchase = (pelicula) => {
    // Lógica para comprar una película
    console.log(`Comprada: ${pelicula.title}`);
    agregarAlCarrito(pelicula);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, onRent, onPurchase }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
