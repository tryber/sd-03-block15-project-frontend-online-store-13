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
        <button data-testid="product-add-to-cart" onClick={() => this.props.handleClick(product, 1)}>Adicionar ao Carrinho</button>
        {/* <Link
          to={{
            pathname: '/cart',
            details: {
              product,
              qnt: 1,
            },
          }}
          data-testid="product-detail-link"
        /> */}
      </div>
    );
  }
}

export default ProductCard;
