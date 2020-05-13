import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './HomePage.css';
import cartIcon from '../images/cart-icon.png';
import search from '../images/search.png'
import ProductList from './ProductList';
import query from '../__mocks__/query';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typedSearch: '',
      ableToSearch: false,
      answer: null,
    }
    this.clickSearch = this.clickSearch.bind(this);
    this.changingSearch = this.changingSearch.bind(this);
  }

  changingSearch(event){
    const input = event.target
    this.setState({
      typedSearch: input.value,
    })
  }

  clickSearch() {
    const answer = getProductsFromCategoryAndQuery(null, this.state.typedSearch);
    this.setState({ 
      answer: answer.results, 
      ableToSearch: true,
    })
    console.log(answer);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" id="searchText" value={this.state.typedSearch} onChange={this.changingSearch} data-testid="query-input"/>
          <button onClick={this.clickSearch} data-testid="query-button">
            <img src={search} className="searchIcon"/>
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
          </Link>
        </div>
        <div className="productsList" >
          {!this.state.ableToSearch ? 
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          :
          <ProductList apiAnswer={query}/>
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;
