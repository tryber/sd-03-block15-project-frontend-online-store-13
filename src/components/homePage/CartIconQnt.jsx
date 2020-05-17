import React from 'react';

class CartIconQnt extends React.Component {

  render() {
    const { numb } = this.props;
    return <p data-testid="shopping-cart-size">{numb}</p>;
  }
}

export default CartIconQnt;
