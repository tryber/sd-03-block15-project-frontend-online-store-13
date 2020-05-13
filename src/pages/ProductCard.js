import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product product-detail-link" className="productContainer" >
        <p>{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    );
  }
}

export default ProductCard;
