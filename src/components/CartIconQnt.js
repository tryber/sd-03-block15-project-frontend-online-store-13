import React from 'react';

class CartIconQnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numDisplay: 0 }
  }

  componentDidMount() {
    if (localStorage.getItem('cart')) {
      const localstorageToArrOfObj = JSON.parse(localStorage.getItem('cart'));
      const sumQnt = localstorageToArrOfObj.map((e) => e.qnt)
      .reduce((acc, qtde) => (acc + qtde), 0);
      this.setState({ numDisplay: sumQnt })
    }
  }

  render() {
    const { numDisplay } = this.state;
    return <p data-testid="shopping-cart-size">{ numDisplay }</p>;
  }
}

export default CartIconQnt;
