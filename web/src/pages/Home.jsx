import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página Inicial (Lista de Produtos)</h1>
      <p>Produto 1 <Link to="/product/1">Ver detalhes</Link></p>
      <p>Produto 2 <Link to="/product/2">Ver detalhes</Link></p>
    </div>
  );
}

export default Home;