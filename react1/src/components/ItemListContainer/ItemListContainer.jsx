import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Importamos las imágenes locales
import cremaHidratanteImg from '../assets/images/crema-hidratante.jpg';
import locionCalmanteImg from '../assets/images/locion-calmante.jpg';
import fraganciaFloralImg from '../assets/images/fragancia-floral.jpg';

// Mock de productos con imágenes locales
const mockItems = [
  { id: 1, name: 'Crema Hidratante', category: 'cremas', description: 'Crema que hidrata y cuida tu piel.', image: cremaHidratanteImg },
  { id: 2, name: 'Loción Calmante', category: 'lociones', description: 'Loción ideal para pieles irritadas.', image: locionCalmanteImg },
  { id: 3, name: 'Fragancia Floral', category: 'fragancias', description: 'Una fragancia suave y duradera.', image: fraganciaFloralImg },
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Filtrar productos por categoría si categoryId existe, o mostrar todos los productos
    if (categoryId) {
      setItems(mockItems.filter(item => item.category === categoryId));
    } else {
      setItems(mockItems); // Mostrar todos los productos si no hay categoría seleccionada
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
                <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
