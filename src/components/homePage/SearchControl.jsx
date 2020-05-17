import React from 'react';
import ProductList from './ProductList';

class SearchControl extends React.Component {

  searchControl() {
    const { ableToSearch, typedSearch, answer, onClick } = this.props;
    if (!ableToSearch) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <ProductList onClick={onClick} search={typedSearch} apiAnswer={answer} />
    );
  }

  render() {
    return (
      <div>
        {this.searchControl()}
      </div>
    );
  }
}

export default SearchControl;
