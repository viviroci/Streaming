import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Carrito.css';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, comprar, total } = useContext(CarritoContext);

  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.title} - {item.tipo === 'rent' ? 'Alquiler' : 'Compra'}: ${item.precio}
                <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={comprar}>Comprar</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
