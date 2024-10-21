import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

// Importamos las imágenes locales
import cremaHidratanteImg from '../assets/images/crema-hidratante.jpg';
import locionCalmanteImg from '../assets/images/locion-calmante.jpg';
import fraganciaFloralImg from '../assets/images/fragancia-floral.jpg';

// Mock de productos con imágenes locales y precios
const mockItems = [
  { id: 1, name: 'Crema Hidratante', category: 'cremas', description: 'Crema que hidrata y cuida tu piel.', image: cremaHidratanteImg, inventory: 10, price: 150 },
  { id: 2, name: 'Loción Calmante', category: 'lociones', description: 'Loción ideal para pieles irritadas.', image: locionCalmanteImg, inventory: 5, price: 200 },
  { id: 3, name: 'Fragancia Floral', category: 'fragancias', description: 'Una fragancia suave y duradera.', image: fraganciaFloralImg, inventory: 8, price: 300 },
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const { addItemToCart } = useCart();

  useEffect(() => {
    if (categoryId) {
      setItems(mockItems.filter(item => item.category === categoryId));
    } else {
      setItems(mockItems);
    }
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Inventario disponible: {item.inventory}</p>
                <Link to={`/item/${item.id}`} className="btn btn-primary mb-3">Ver detalles</Link>
                <ItemQuantitySelector 
                  maxQuantity={item.inventory} 
                  onAdd={(quantity) => addItemToCart(item, quantity)} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
