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

  // componentDidUpdate(prevProps, prevState) {
  //   const { typedSearch, chosCategory } = this.state;
  //   if (prevState.typedSearch !== typedSearch
  //     || prevState.chosCategory !== chosCategory) {
  //     return this.clickSearch(typedSearch, chosCategory);
  //   }
  // }

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
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={cartIcon} className="cart-icon" alt="Icon of a Cart" />
          </Link>
        </div>
        <div className="product">
          <div className="product-list-category">
            <FilterCategory onChecked={this.choosedCategory} categories={categories} />
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
