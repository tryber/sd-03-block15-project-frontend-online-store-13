import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { session: [] };
    this.addToSession = this.addToSession.bind(this);
  }

  addToSession(product, qnt) {
    const toAdd = {
      product,
      qnt,
    };
    this.setState((state) => ({ session: [...state.session, toAdd]}));
    localStorage.setItem('cart', JSON.stringify([...this.state.session, toAdd]));
  }

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
      <div className="product-lst">
        {products.results.map((prod) =>
          <ProductCard 
            search={search} 
            key={prod.id} 
            product={prod} 
            handleClick={this.addToSession}
          />,
        )}
      </div>
    );
  }
}

export default ProductList;
