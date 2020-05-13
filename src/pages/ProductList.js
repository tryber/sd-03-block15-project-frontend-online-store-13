import React from 'react';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  render() {
    const products = this.props.apiAnswer;
    if (this.props.apiAnswer.results.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }
    return (
      products.results.map((product) => <ProductCard key={product.id} product={product} />)
    );
  }
}

export default ProductList;
