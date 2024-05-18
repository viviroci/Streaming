import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Carrito.css';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.title} - {item.tipo}
                <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;

