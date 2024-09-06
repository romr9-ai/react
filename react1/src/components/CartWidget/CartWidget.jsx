import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de haber instalado Bootstrap

const CartWidget = () => {
  const cartItemCount = 3;  // Número fijo (hardcodeado) de artículos en el carrito

  return (
    <div className="cart-widget position-relative">
      <FaShoppingCart size={30} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartItemCount}
      </span>
    </div>
  );
}

export default CartWidget;
