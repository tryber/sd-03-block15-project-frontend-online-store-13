import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product" className="productContainer">
        <p>{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>{`R$${price.toFixed(2)}`}</p>
        <Link
          to={{
            pathname: `/product/${id}`,
            details: { product },
          }}
          data-testid="product-detail-link"
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default ProductCard;
