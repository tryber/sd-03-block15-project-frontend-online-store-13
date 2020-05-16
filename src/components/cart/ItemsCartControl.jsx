import React from 'react';
import ProductInCart from './ProductInCart';
import empty from '../../images/empty-cart.png';

class ItemsCartControl extends React.Component {
  renderItemsCart() {
    const { items, removeItem } = this.props;
    if (items === null) {
      return (
        <div className="empty-cart">
          <img src={empty} alt="Empty Box" className="empty-image" />
          <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        </div>
      );
    }
    return (
      <ProductInCart products={items} handleClick={removeItem} />
    );
  }

  render() {
    return (
      <div>
        {this.renderItemsCart()}
      </div>
    );
  }
}

export default ItemsCartControl;
