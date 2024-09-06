import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <p>Explora nuestras categorías de productos para el cuidado post-tatuaje.</p>
    </div>
  );
};

export default ItemListContainer;
