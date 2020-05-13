import React from 'react';
import FilterCategory from '../components/FilterCategory';
import { getCategories } from '../services/api';

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <input type="text" id="searchText" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <FilterCategory />
      </div>
    );
  }
}

export default SearchBar;
