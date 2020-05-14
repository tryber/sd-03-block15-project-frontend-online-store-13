import React from 'react';
import './FilterCategory.css';

class FilterCategory extends React.Component {
  render() {
    const { categories, onChecked } = this.props;
    return (
      <div>
        <div className="category-list">
          {categories.map(({ name, id }) => (
            <div key={id}>
              <label htmlFor={id}>
                <input
                  data-testid="category"
                  type="radio"
                  onChange={() => onChecked(id)}
                  name="categories"
                  id={id}
                />
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
