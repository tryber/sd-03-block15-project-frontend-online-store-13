import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" id="searchText" />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default SearchBar;
