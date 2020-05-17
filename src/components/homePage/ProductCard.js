import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import FreeShipping from './FreeShipping';

class ProductCard extends React.Component {
  render() {
    const { product, handleClick } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product" className="productContainer">
        <FreeShipping shipping={product.shipping.free_shipping} />
        <p>{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>{`R$${price.toFixed(2)}`}</p>
        <Link
          to={{
            pathname: `/product/${id}`,
            details: { product },
            func: handleClick,
          }}
          data-testid="product-detail-link"
        >
          VER DETALHES
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={() => handleClick(product, 1)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
