import React from 'react';
import { Link } from 'react-router-dom';
import returnIcon from '../images/return.png';
import cartIcon from '../images/cart-icon.png';
import ItemsCartControl from '../components/cart/ItemsCartControl';
import './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('cart')) {
      this.setState({ items: JSON.parse(localStorage.getItem('cart')) });
    }
  }

  removeItem(product) {
    const { items } = this.state;
    const curList = [...items];
    const index = curList.indexOf(product);
    if (index !== -1) {
      curList.splice(index, 1);
      this.setState({ items: curList });
      if (curList.length) {
        localStorage.setItem('cart', JSON.stringify(curList));
      } else {
        localStorage.removeItem('cart');
      }
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <header>
          <Link to="/">
            <img src={returnIcon} className="return-button" alt="Icon of an returning arrow" />
          </Link>
        </header>
        <div className="cart-icon-name">
          <img
            data-testid="shopping-cart-button"
            src={cartIcon}
            className="cart-icon"
            alt="Icon of a Cart"
          />
          <h3>Carrinho de Compras</h3>
        </div>
        <ItemsCartControl items={items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default Cart;
