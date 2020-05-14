import React from 'react';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  render() {
    const { search, apiAnswer } = this.props;
    const products = apiAnswer;
    if (apiAnswer.results.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }
    return (
      products.results.map((product) => <ProductCard search={search} key={product.id} product={product} />)
    );
  }
}

export default ProductList;
