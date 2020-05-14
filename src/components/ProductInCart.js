import React from 'react';
import { Link } from 'react-router-dom';
import './ProductInCart.css';
import ChangeQnt from './ChangeQnt';

class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
    this.changeTotal = this.changeTotal.bind(this);
  }

  changeTotal(value) {
    this.setState((state) => ({ totalPrice: state.totalPrice + value }));
  }

  render() {
    return (
      <div>
        {this.props.products.map((product) =>
          <div className="product" key={product.product.id}>
            <img src={product.product.thumbnail} alt="Product" />
            <p data-testid="shopping-cart-product-name">{product.product.title}</p>
            <ChangeQnt
              qnt={product.qnt}
              max={product.product.available_quantity}
              price={product.product.price}
              onChange={this.changeTotal}
            />
          </div>,
        )}
        <p>Valor Total da Compra: R${this.state.totalPrice.toFixed(2)}</p>
        <Link> Finalizar Compra </Link>
      </div>
    );
  }
}

export default ProductInCart;
