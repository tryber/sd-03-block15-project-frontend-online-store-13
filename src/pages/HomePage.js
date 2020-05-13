import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cart-icon.png';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="searchText" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
        </Link>
      </div>
    );
  }
}

export default SearchBar;
