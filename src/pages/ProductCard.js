import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props.product;
    const { search } = this.props;
    return (
      <div data-testid="product" className="productContainer">
        <p>{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>{`R$${price.toFixed(2)}`}</p>
        <Link to={`/${search}/${id}`} data-testid="product-detail-link">VER DETALHES</Link>
      </div>
    );
  }
}

export default ProductCard;
