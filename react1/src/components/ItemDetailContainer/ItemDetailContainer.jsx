import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importamos las imágenes locales
import cremaHidratanteImg from '../assets/images/crema-hidratante.jpg';
import locionCalmanteImg from '../assets/images/locion-calmante.jpg';
import fraganciaFloralImg from '../assets/images/fragancia-floral.jpg';

// Mock de productos con imágenes
const mockItems = [
  { id: 1, name: 'Crema Hidratante', category: 'cremas', description: 'Crema que hidrata y cuida tu piel.', image: cremaHidratanteImg },
  { id: 2, name: 'Loción Calmante', category: 'lociones', description: 'Loción ideal para pieles irritadas.', image: locionCalmanteImg },
  { id: 3, name: 'Fragancia Floral', category: 'fragancias', description: 'Una fragancia suave y duradera.', image: fraganciaFloralImg },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();  // Obtener el parámetro de la URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Obtener el producto correspondiente a itemId
    const fetchItem = async () => {
      const fetchedItem = await new Promise(resolve => {
        setTimeout(() => {
          resolve(mockItems.find(item => item.id === parseInt(itemId)));
        }, 500);  // Simulación de un retraso en la carga
      });
      setItem(fetchedItem);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="container mt-5">
      {item ? (
        <div className="card">
          <img src={item.image} alt={item.name} className="card-img-top" />
          <div className="card-body">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
