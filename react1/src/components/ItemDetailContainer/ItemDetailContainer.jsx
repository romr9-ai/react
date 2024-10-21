import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

// Importamos las imágenes locales
import cremaHidratanteImg from '../assets/images/crema-hidratante.jpg';
import locionCalmanteImg from '../assets/images/locion-calmante.jpg';
import fraganciaFloralImg from '../assets/images/fragancia-floral.jpg';

// Mock de productos con imágenes y descripciones detalladas
const mockItems = [
  {
    id: 1,
    name: 'Crema Hidratante',
    category: 'cremas',
    description: 'Crema que hidrata y cuida tu piel. Su fórmula especialmente diseñada para pieles sensibles y tatuadas ayuda a mantener la hidratación por más tiempo, aliviando la sequedad y reduciendo el enrojecimiento. Esta crema contiene ingredientes naturales como aloe vera y aceite de coco que nutren la piel, proporcionando una sensación de frescura. Es ideal para el cuidado diario y para mantener tus tatuajes en perfecto estado.',
    image: cremaHidratanteImg,
    inventory: 10,
    price: 150
  },
  {
    id: 2,
    name: 'Loción Calmante',
    category: 'lociones',
    description: 'Loción ideal para pieles irritadas. Esta loción calmante está formulada para proporcionar un alivio inmediato de la irritación y el picor. Con ingredientes como la caléndula y el extracto de manzanilla, esta loción ayuda a reducir la inflamación y a mejorar la elasticidad de la piel. Es perfecta para usar después del proceso de tatuado o en cualquier momento que la piel necesite un poco de cuidado adicional.',
    image: locionCalmanteImg,
    inventory: 5,
    price: 200
  },
  {
    id: 3,
    name: 'Fragancia Floral',
    category: 'fragancias',
    description: 'Una fragancia suave y duradera. La fragancia floral está diseñada para quienes desean una esencia ligera y fresca durante el día. Su mezcla de flores como el jazmín y la rosa, combinada con notas de fondo amaderadas, hace de esta fragancia una excelente opción para cualquier ocasión. Además, su fórmula sin alcohol asegura que no irritará tu piel, especialmente después del tatuado.',
    image: fraganciaFloralImg,
    inventory: 8,
    price: 300
  }
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();  // Obtener el parámetro de la URL
  const [item, setItem] = useState(null);
  const { addItemToCart } = useCart();  // Utilizamos el contexto del carrito

  useEffect(() => {
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
            <p>Precio: ${item.price}</p>
            <p>Inventario disponible: {item.inventory}</p>
            <ItemQuantitySelector 
              maxQuantity={item.inventory} 
              onAdd={(quantity) => addItemToCart(item, quantity)} 
            />
          </div>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
