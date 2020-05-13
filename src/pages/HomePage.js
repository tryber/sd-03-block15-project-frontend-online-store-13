import React from 'react';
import CartButton from './cartButton';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="searchText" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
      </div>
    );
  }
}

export default SearchBar;
