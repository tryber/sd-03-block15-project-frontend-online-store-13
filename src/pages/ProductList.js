import React from 'react';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  render() {
    const products = this.props.apiAnswer;
    console.log(this.props.apiAnswer);
    if (!this.props.apiAnswer) {
      return (
        <p>Nenhum produto foi encontrado</p>
      )
    }
    return (
      products.map((product) => <ProductCard key={product.id} product={product} />)
    );
  }
}

export default ProductList;
