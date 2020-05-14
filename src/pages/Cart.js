import React from 'react';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';
import returnIcon from '../images/return.png';
import empty from '../images/empty-cart.png';
import cartIcon from '../images/cart-icon.png';
import './Cart.css';
import data from '../__mocks__/query';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //items: [],
      items: data.results,
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src={returnIcon} className="return-button" alt="Icon of an returning arrow" />
          </Link>
        </header>
        <div className="cart-icon-name">
          <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
          <h3>Carrinho de Compras</h3>
        </div>
        {this.state.items.length === 0 ?
          <div className="empty-cart">
          <img src={empty} alt="Empty Box" className="empty-image" />
          <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          </div>
        :
        <div>
          {this.state.items.map((product) => <ProductInCart product={product} />)}
          <p>Valor Total da Compra: R$</p>
          <Link>
            Finalizar Compra
          </Link>
        </div>
        }
      </div>
    );
  }
}

export default Cart;
