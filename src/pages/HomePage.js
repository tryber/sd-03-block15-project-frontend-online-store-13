import React from 'react';
// import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery,
  getCategories,
} from '../services/api';
import './HomePage.css';
// import cartIcon from '../images/cart-icon.png';
import SearchControl from '../components/homePage/SearchControl';
import FilterCategory from '../components/homePage/FilterCategory';
import SearchBar from '../components/homePage/SearchBar';
import CartIconQnt from '../components/homePage/CartIconQnt';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedSearch: '',
      chosCategoryID: null,
      categories: [],
      ableToSearch: false,
      answer: null,
      session: [],
      numDisplay: 0,
    };
    this.addToSession = this.addToSession.bind(this);
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
    getProductsFromCategoryAndQuery(chosCategoryID, typedSearch).then(
      (answer) => {
        this.setState({
          answer,
          ableToSearch: true,
        });
      },
    );
  }

  choosedCategory(id) {
    this.setState({ chosCategoryID: id }, () => {
      this.clickSearch();
    });
  }

  addToSession(product, qnt) {
    const toAdd = {
      product,
      qnt,
    };
    if (this.state.session !== null) {
      const currentList = this.state.session;
      currentList.forEach((item, index) => {
        if (item.product.id === toAdd.product.id) {
          currentList[index] = {
            product: toAdd.product,
            qnt: item.qnt + 1,
          };
        } else {
          this.setState((state) => ({ session: [...state.session, toAdd] }));
          localStorage.setItem('cart', JSON.stringify([...this.state.session, toAdd]));
        }
      })
    } else {
      this.setState((state) => ({ session: [...state.session, toAdd] }));
      localStorage.setItem('cart', JSON.stringify([...this.state.session, toAdd]));
    }
  }

  updateNumDisplay() {
    if (localStorage.getItem('cart')) {
      const localstorageToArrOfObj = JSON.parse(localStorage.getItem('cart'));
      const sumQnt = localstorageToArrOfObj.map((e) => e.qnt)
        .reduce((acc, qtde) => (acc + qtde), 0);
      this.setState({ numDisplay: sumQnt });
    }
  }

  render() {
    const { typedSearch, answer, categories, ableToSearch, numDisplay } = this.state;
    return (
      <div>
        <div className="searchbar-cart">
          <SearchBar onClick={this.searchChange} />
          <CartIconQnt numb={numDisplay} />
        </div>
        <div className="product">
          <div className="product-list-category">
            <FilterCategory
              onChecked={this.choosedCategory}
              categories={categories}
            />
            <div className="productsList">
              <SearchControl
                numb={numDisplay}
                onClick={this.addToSession}
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
