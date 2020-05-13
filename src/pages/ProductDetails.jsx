import React from 'react';
import product from './dataTest';

class ProductDetails extends React.Component {
  render() {
    const { title, price, thumbnail } = product.results[0];
    console.log(product);
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h2>{`R$ ${price}`}</h2>
          <img src={thumbnail} alt={`Foto do ${title}`} />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
