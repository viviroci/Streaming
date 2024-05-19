import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Carrito.css';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, comprar } = useContext(CarritoContext);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay películas en el carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((pelicula) => (
              <li key={pelicula.id}>
                <h3>{pelicula.title}</h3>
                <button onClick={() => eliminarDelCarrito(pelicula.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={comprar}>Comprar</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
