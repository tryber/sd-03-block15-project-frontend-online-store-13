import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { search, apiAnswer } = this.props;
    const products = apiAnswer;
    if (apiAnswer.results.length === 0) {
      return (
        <div className="product-lst">
          <p>Nenhum produto foi encontrado</p>
        </div>
      );
    }
    return (
      products.results.map((prod) => <ProductCard search={search} key={prod.id} product={prod} />)
    );
  }
}

export default ProductList;
