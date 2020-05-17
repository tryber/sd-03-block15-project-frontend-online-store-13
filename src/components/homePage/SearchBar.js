import React from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';
import search from '../../images/search.png';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typedSearch: '' };

    this.changingSearch = this.changingSearch.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
    const { typedSearch } = this.state;
    onClick(typedSearch);
  }

  changingSearch(event) {
    const input = event.target;
    this.setState({ typedSearch: input.value });
  }

  render() {
    const { typedSearch } = this.state;
    return (
      <div>
        <input
          type="text"
          id="searchText"
          value={typedSearch}
          onChange={this.changingSearch}
          data-testid="query-input"
        />
        <button type="button" onClick={this.onClick} data-testid="query-button">
          <img src={search} className="searchIcon" alt="Search Icon" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
