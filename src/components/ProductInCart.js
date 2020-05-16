import React from 'react';
import { Link } from 'react-router-dom';
import './ProductInCart.css';
import ChangeQnt from './ChangeQnt';

class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      totalQuantity: undefined,
    };
    this.changeTotal = this.changeTotal.bind(this);
  }

  changeTotal(value, qnt) {
    this.setState((state) => ({
      totalPrice: state.totalPrice + value,
      totalQuantity: state.totalQuantity + qnt,
    }));
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        {this.props.products.map((product) =>
          <div className="product" key={product.product.id}>
            <button onClick={() => this.props.handleClick(product)}>X</button>
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
        <Link
          to={{
            pathname: "/checkout",
            products: this.props.products,
          }}
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ProductInCart;
