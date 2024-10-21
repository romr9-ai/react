import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, updateItemQuantity } = useCart();

  // Calcular el subtotal del carrito
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Estados para los datos del comprador y la confirmación
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  // Manejar la compra
  const handlePurchase = () => {
    if (buyerInfo.name && buyerInfo.email && buyerInfo.phone) {
      setConfirmationMessage('Su compra ha sido procesada correctamente');
      clearCart(); // Vaciar el carrito después de completar la compra
    } else {
      alert('Por favor, completa todos los campos para continuar con la compra.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Resumen del carrito */}
        <div className="col-md-8">
          <h2>Resumen de la Compra</h2>
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <div>
              <button 
                className="btn btn-secondary mb-3" 
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>
              {cartItems.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={item.image} alt={item.name} className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Cantidad: {item.quantity}</p>
                        <p className="card-text">Precio por unidad: ${item.price}</p>
                        <p className="card-text">Total: ${item.price * item.quantity}</p>
                        <ItemQuantitySelector
                          initial={item.quantity}
                          maxQuantity={item.inventory}
                          buttonLabel="Actualizar cantidad"
                          onAdd={(newQuantity) => {
                            if (newQuantity === 0) {
                              removeItemFromCart(item.id);
                            } else {
                              updateItemQuantity(item.id, newQuantity);
                            }
                          }}
                        />
                        <button
                          className="btn btn-danger mt-3"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <h4>Subtotal del carrito: ${subtotal}</h4>
              </div>
            </div>
          )}
        </div>

        {/* Formulario de datos del comprador */}
        <div className="col-md-4">
          <h2>Datos del Comprador</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={buyerInfo.name}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={buyerInfo.email}
                onChange={handleInputChange}
                placeholder="Ingresa tu email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={buyerInfo.phone}
                onChange={handleInputChange}
                placeholder="Ingresa tu teléfono"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePurchase}
            >
              Comprar
            </button>
          </form>
          {confirmationMessage && (
            <div className="alert alert-success mt-4" role="alert">
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
