import React from 'react';

function AddToCart (props) {
  const { addToCart } = props;
    return (
      <button data-testid="product-detail-add-to-cart" type="button" onClick={ addToCart }>
        Add To Cart
      </button>
    );
}

export default AddToCart;
