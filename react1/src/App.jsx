import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';  // Crearemos este componente más tarde
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de cuidado post-tatuaje!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
