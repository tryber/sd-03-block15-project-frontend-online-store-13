import React from 'react';
import { Link } from 'react-router-dom';
import './ProductInCart.css';
import ProductCardInCart from './ProductCardInCart';
import SumPrice from '../components/SumPrice';

class ProductInCart extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) =>
          <ProductCardInCart product={product} />,
        )}
        <p>Valor Total da Compra: R$<SumPrice products={this.props.products} /></p>
        <Link> Finalizar Compra </Link>
      </div>
    );
  }
}

export default ProductInCart;
