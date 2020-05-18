import React from 'react';
import ProductRow from './ProductRow';
import './AllProducts.css';

class AllProducts extends React.Component {
  render() {
    console.log(this.props.products);
    const { products } = this.props;
    return (
      <div className="all-products">
        <h3>Revise seus Produtos</h3>
        <div>
          {products.map((e) => <ProductRow key={e.product.id} qnt={e.qnt} products={e.product} />)}
        </div>
      </div>
    );
  }
}

export default AllProducts;
