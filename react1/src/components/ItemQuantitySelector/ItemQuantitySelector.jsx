import React, { useState } from 'react';

const ItemQuantitySelector = ({ initial = 1, maxQuantity, buttonLabel = "Añadir al carrito", onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
      <span className="mx-2">{quantity}</span>
      <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
      <button className="btn btn-primary ms-3" onClick={() => onAdd(quantity)}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
