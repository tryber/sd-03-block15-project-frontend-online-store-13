import React from 'react';
import './ProductInCart.css';
import ChangeQnt from './ChangeQnt';

class ProductInCart extends React.Component {
  render() {
    const { title, price, thumbnail, available_quantity:availableQnt } = this.props.product;
    return (
      <div className="product" >
        <img src={thumbnail} alt="Product" />
        <p>{title}</p>
        <ChangeQnt max={availableQnt}/>
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    );
  }
}

export default ProductInCart;
