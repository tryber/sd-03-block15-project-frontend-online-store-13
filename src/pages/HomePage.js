import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import './HomePage.css';
import cartIcon from '../images/cart-icon.png';
import SearchControl from '../components/homePage/SearchControl';
import FilterCategory from '../components/homePage/FilterCategory';
import SearchBar from '../components/homePage/SearchBar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedSearch: '',
      chosCategoryID: null,
      categories: [],
      ableToSearch: false,
      answer: null,
    };
    this.searchChange = this.searchChange.bind(this);
    this.choosedCategory = this.choosedCategory.bind(this);
  }

  componentDidMount() {
    getCategories().then((resp) => {
      this.setState({ categories: resp });
    });
  }

  searchChange(search) {
    this.setState({ typedSearch: search }, () => {
      this.clickSearch();
    });
  }

  clickSearch() {
    const { typedSearch, chosCategoryID } = this.state;
    getProductsFromCategoryAndQuery(chosCategoryID, typedSearch).then((answer) => {
      this.setState({
        answer,
        ableToSearch: true,
      });
    });
  }

  choosedCategory(id) {
    this.setState({ chosCategoryID: id }, () => {
      this.clickSearch();
    });
  }

  render() {
    const { typedSearch, answer, categories, ableToSearch } = this.state;
    return (
      <div>
        <div className="searchbar-cart">
          <SearchBar onClick={this.searchChange} />
          <Link to="/cart">
            <img
              data-testid="shopping-cart-button"
              src={cartIcon} className="cart-icon"
              alt="Icon of a Cart"
            />
          </Link>
        </div>
        <div className="product">
          <div className="product-list-category">
            <FilterCategory onChecked={this.choosedCategory} categories={categories} />
            <div className="productsList">
              <SearchControl
                ableToSearch={ableToSearch}
                answer={answer}
                typedSearch={typedSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
