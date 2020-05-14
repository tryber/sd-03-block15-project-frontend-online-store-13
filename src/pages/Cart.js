import React from 'react';
import { Link } from 'react-router-dom';
import returnIcon from '../images/return.png';
import empty from '../images/empty-cart.png';
import cartIcon from '../images/cart-icon.png';
import ProductDetails from '../pages/DetailPage';
import './Cart.css';

localStorage.getItem(new ProductDetails(), 0);

class Cart extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src={returnIcon} className="return-button" alt="Icon of an returning arrow" />
          </Link>
        </header>
        <div className="cart-icon-name">
          <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
          <h3>Carrinho de Compras</h3>
        </div>
        <div className="empty-cart">
          <img src={empty} alt="Empty Box" className="empty-image" />
          <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        </div>
      </div>
    );
  }
}

export default Cart;
