import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './cartButton.css';
import cartIcon from './images/cart-icon.png';
import Cart from './Cart';

class CartButton extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-button">
        <Link to="/cart">
          <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
        </Link>
        <Switch>
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default CartButton;
