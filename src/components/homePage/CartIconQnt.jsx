import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/cart-icon.png';

class CartIconQnt extends React.Component {

  render() {
    const { numb } = this.props;
    return (
      <div className="cartIconQnt">
        <Link to="/cart">
          <img
            data-testid="shopping-cart-button"
            src={cartIcon}
            className="cart-icon"
            alt="Icon of a Cart"
          />
        </Link>
        <p data-testid="shopping-cart-size">{numb}</p>
      </div>
    );
  }
}

export default CartIconQnt;
