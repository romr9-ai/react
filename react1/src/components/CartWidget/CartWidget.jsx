import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';  

const CartWidget = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget position-relative">
      <FaShoppingCart size={30} />
      {cartItemCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
