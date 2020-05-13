import React from 'react';
import product from './dataTest';

class ProductDetails extends React.Component {
  render() {
    const { title, price, thumbnail } = product.results[0];
    const productSpec = product.results[0].attributes;
    console.log(product);
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <h2>{`R$ ${price}`}</h2>
          <img src={thumbnail} alt={`Foto do ${title}`} />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            {productSpec.map((e) => (
              <li>{`${e.name}: ${e.value_name}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
