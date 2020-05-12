import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label data-testid="home-initial-message" htmlFor="searchText">
          Digite algum termo de pesquisa ou escolha uma categoria.
        <input type="text" id="searchText" value={ } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
