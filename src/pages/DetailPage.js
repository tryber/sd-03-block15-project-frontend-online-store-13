import React from 'react';
import product from '../components/dataTest';
import Quantity from '../components/Quantity';
import AddToCart from '../components/AddToCart';

class ProductDetails extends React.Component {
  render() {
    const { title, price, thumbnail } = product.results[0];
    const productSpec = product.results[0].attributes;
    console.log(product);
    return (
      <div className="product-details-page-container">
        <div className="product-details-h1-name">
          <h1 data-testid="product-detail-name">{title}</h1>
          <h2>{`R$ ${price}`}</h2>
        </div>
        <div className="produc-details-contents">
          <div className="product-details-left">
            <img src={thumbnail} alt={`Foto do ${title}`} />
          </div>
          <div className="product-details-right">
            <h3>Especificações Técnicas</h3>
            <ul>
              {productSpec.map((e) => (
                <li key={e.id}>{`${e.name}: ${e.value_name}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <Quantity />
        <AddToCart />
      </div>
    );
  }
}

export default ProductDetails;
