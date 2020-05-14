import React from 'react';
import './FilterCategory.css';

class FilterCategory extends React.Component {
  render() {
    const { categories } = this.props;
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
