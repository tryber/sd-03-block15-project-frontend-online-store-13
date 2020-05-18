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

  changeTotal(value) {
    this.setState((state) => ({ totalPrice: state.totalPrice + value }));
  }

  render() {
    const { products, handleClick } = this.props;
    const { totalPrice } = this.state;
    // console.log(this.props.products);
    return (
      <div>
        {products.map((product) =>
          <div className="product" key={product.product.id}>
            <button onClick={() => handleClick(product)}>X</button>
            <img src={product.product.thumbnail} alt="Product" />
            <h3 
            data-testid="shopping-cart-product-name" className="product-name"
            >
            {product.product.title}
            </h3>
            <ChangeQnt
              qnt={product.qnt}
              max={product.product.available_quantity}
              price={product.product.price}
              onChange={this.changeTotal}
            />
          </div>,
        )}
        <p className="total-price">Valor Total da Compra: R${totalPrice.toFixed(2)}</p>
        <Link to="/checkout" data-testid="checkout-products">
          <button 
          className="end-shopping" 
          type="button" 
          onClick={this.handleLocalStorage}>
          Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ProductInCart;
