import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Produto {id}</h1>
      <p>Mostrando detalhes para o produto com ID: {id}</p>
      <br />
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default ProductDetail;