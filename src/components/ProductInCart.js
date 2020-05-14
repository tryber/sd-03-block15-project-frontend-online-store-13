import React from 'react';
import { Link } from 'react-router-dom';
import './ProductInCart.css';
import ChangeQnt from './ChangeQnt';
import SumPrice from '../components/SumPrice';

class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 }
    this.changeTotal = this.changeTotal.bind(this);
  }

  changeTotal(value) {
    this.setState((state) => ({totalPrice: state.totalPrice + value}))
  }

  render() {
    return (
      <div>
        {this.props.products.map((product) =>
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt="Product" />
            <p>{product.title}</p>
            <ChangeQnt max={product.available_quantity} price={product.price} onChange={this.changeTotal}/>
          </div>,
        )}
        <p>Valor Total da Compra: R${this.state.totalPrice.toFixed(2)}</p>
        <Link> Finalizar Compra </Link>
      </div>
    );
  }
}

export default ProductInCart;
