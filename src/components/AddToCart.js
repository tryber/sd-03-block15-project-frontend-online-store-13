import React from 'react';

class AddToCart extends React.Component {

  addToCart () {
    alert('Produto adicionado ao carrinho')
  }

  render() {
    return (
      <button data-testid="product-detail-add-to-cart" type="button" onClick={this.addToCart}>
        Add To Cart
      </button>
    )
  }
}

export default AddToCart;
