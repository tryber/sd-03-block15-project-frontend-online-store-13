import React from 'react';

class CartIconQnt extends React.Component {
  render() {
    if (localStorage.getItem('cart')) {
      const localstorageToArrOfObj = JSON.parse(localStorage.getItem('cart'));
      const sumQnt = localstorageToArrOfObj.map((e) => e.qnt).reduce((acc, qtde) => (acc + qtde), 0);
      return <p data-testid="shopping-cart-size">{sumQnt}</p>;
    } else {
      return <p data-testid="shopping-cart-size">0</p>;
    }
  }
}

export default CartIconQnt;
