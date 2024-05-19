// CarritoContext.js
import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pelicula) => {
    setCarrito([...carrito, pelicula]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const comprar = () => {
    // Aquí podrías agregar la lógica para procesar la compra
    console.log('Compra realizada:', carrito);
    // Vaciar el carrito después de la compra
    vaciarCarrito();
    alert('Compra realizada con éxito!');
  };

  const onRent = (pelicula) => {
    console.log(`Alquilada: ${pelicula.title}`);
    agregarAlCarrito(pelicula);
  };

  const onPurchase = (pelicula) => {
    console.log(`Comprada: ${pelicula.title}`);
    agregarAlCarrito(pelicula);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, comprar, onRent, onPurchase }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;