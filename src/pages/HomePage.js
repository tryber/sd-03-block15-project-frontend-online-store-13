import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import './HomePage.css';
import cartIcon from '../images/cart-icon.png';
import ProductList from '../components/ProductList';
import FilterCategory from '../components/FilterCategory';
import SearchBar from '../components/SearchBar';

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
    // this.changingSearch = this.changingSearch.bind(this);
  }

  componentDidMount() {
    getCategories().then((resp) => {
      this.setState({ categories: resp });
    });
  }

  // changingSearch(event) {
  //   const input = event.target;
  //   this.setState({ typedSearch: input.value });
  // }

  clickSearch(search) {
    getProductsFromCategoryAndQuery(null, search).then((answer) => {
      this.setState({
        typedSearch: search,
        answer,
        ableToSearch: true,
      });
    });
  }

  render() {
    const { typedSearch, answer, categories, ableToSearch } = this.state;
    return (
      <div>
        <div className="searchbar-cart">
          <SearchBar onClick={this.clickSearch} />
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
