import React from 'react';
import * as api from '../services/api';

class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <div className="category-list">
          {categories.map(({ name, id }) => (
            <div data-testid="category" key={id}>
              <label htmlFor={id}>
                <input type="radio" name="categories" id={id} />
                {name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterCategory;
