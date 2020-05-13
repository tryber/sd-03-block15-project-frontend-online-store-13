import React from 'react';
import { Link } from 'react-router-dom';
import './cartButton.css';
import cartIcon from '../images/cart-icon.png';

class CartButton extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-button">
        <Link to="/cart">
          <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
