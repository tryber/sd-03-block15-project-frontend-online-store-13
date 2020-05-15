import React from 'react';
import { Redirect } from 'react-router';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.goToCart = this.goToCart.bind(this);
  }

  goToCart() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/cart/" />;
    }
    return (
      <button onClick={this.goToCart}>Adicionar ao Carrinho</button>
    );
  }
}

export default AddToCart;
