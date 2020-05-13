import React from 'react';
import { getCategories } from '../services/api';

class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    const { categories } = this.state;
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
