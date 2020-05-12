import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import returnIcon from './images/return.png';
import empty from './images/empty-cart.png';
import cartIcon from './images/cart-icon.png';
import './Cart.css'

class Cart extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
          <img src={returnIcon} className="return-button"/>
          </Link>
        </header>
        <div className="cart-icon-name">
          <img src={cartIcon} className="cart-icon" />
          <h3>Carrinho de Compras</h3>
        </div>
        <div className="empty-cart">
          <img src={empty} alt="Empty Box" className="empty-image" />
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        </div>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </div>
    )
  }
}

export default Cart;