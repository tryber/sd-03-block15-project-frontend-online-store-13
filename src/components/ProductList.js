import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { session: [] }
    this.addToSession = this.addToSession.bind(this);
    this.alreadyHere = this.alreadyHere.bind(this);
  }

  alreadyHere(toAdd) {
    const currentList = this.state.session;
    currentList.forEach((item) => {
      if (item.product.id === toAdd.product.id) {
        return {
          product: toAdd.product,
          qnt: item.qnt + 1,
        };
      }
      return toAdd;
    })
  }

  addToSession(product, qnt) {
    let toAdd = {
      product,
      qnt,
    };
    if(this.state.session.length !== 0) {
      const currentList = this.state.session;
      currentList.forEach((item, index) => {
      if (item.product.id === toAdd.product.id && item.product.available_quantity >= item.qnt + 1) {
        currentList[index] = {
          product: toAdd.product,
          qnt: item.qnt + 1,
        };
        this.setState((state) => ({ session: [...currentList] }));
        localStorage.setItem('cart', JSON.stringify([...currentList]));
      }
    })
    } else {
    this.setState((state) => ({ session: [...state.session, toAdd] }));
    localStorage.setItem('cart', JSON.stringify([...this.state.session, toAdd]));
    }
    
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
