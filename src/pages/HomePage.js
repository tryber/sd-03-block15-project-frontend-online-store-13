import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import './HomePage.css';
import cartIcon from '../images/cart-icon.png';
import search from '../images/search.png';
import ProductList from '../components/ProductList';
import FilterCategory from '../components/FilterCategory';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedSearch: '',
      categories: [],
      ableToSearch: false,
      answer: null,
    };
    this.clickSearch = this.clickSearch.bind(this);
    this.changingSearch = this.changingSearch.bind(this);
  }

  componentDidMount() {
    getCategories().then((resp) => {
      this.setState({ categories: resp });
    });
  }

  changingSearch(event) {
    const input = event.target;
    this.setState({ typedSearch: input.value });
  }

  clickSearch() {
    const { typedSearch } = this.state;
    getProductsFromCategoryAndQuery(null, typedSearch).then((answer) => {
      this.setState({
        answer,
        ableToSearch: true,
      });
    });
  }

  render() {
    const { typedSearch, answer, categories, ableToSearch } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            id="searchText"
            value={typedSearch}
            onChange={this.changingSearch}
            data-testid="query-input"
          />
          <button type="button" onClick={this.clickSearch} data-testid="query-button">
            <img src={search} className="searchIcon" alt="Search Icon" />
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
          </Link>
        </div>
        <div className="product">
          <div className="product-list-category">
            <FilterCategory categories={categories} />
            <div className="productsList">
              {!ableToSearch
                ? <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                :
                <ProductList search={typedSearch} apiAnswer={answer} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
