import React from 'react';
import ProductCard from './ProductCard';
import query from '../__mocks__/query'

class ProductList extends React.Component {
  componentDidMount () {
    
  }
  render() {
    const products = this.props.apiAnswer;
    console.log(this.props.apiAnswer);
    if (!this.props.apiAnswer) {
      return(
        <p>Nenhum produto foi encontrado</p>
      )
    }
    return(
      products.results.map(product => <ProductCard key={product.id} product={product}/>)
    )
  }
}

export default ProductList;
