import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (pelicula, tipo) => {
    const precio = tipo === 'rent' ? pelicula.price.rent : pelicula.price.purchase;
    setCarrito([...carrito, { ...pelicula, tipo, precio }]);
    setTotal(total + precio);
  };

  const eliminarDelCarrito = (id) => {
    const item = carrito.find((item) => item.id === id);
    setTotal(total - item.precio);
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
  };

  const comprar = () => {
    console.log('Compra realizada:', carrito);
    vaciarCarrito();
    alert('Compra realizada con éxito!');
  };

  const onRent = (pelicula) => {
    console.log(`Alquilada: ${pelicula.title}`);
    agregarAlCarrito(pelicula, 'rent');
  };

  const onPurchase = (pelicula) => {
    console.log(`Comprada: ${pelicula.title}`);
    agregarAlCarrito(pelicula, 'purchase');
  };

  return (
    <CarritoContext.Provider value={{ carrito, total, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, comprar, onRent, onPurchase }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
