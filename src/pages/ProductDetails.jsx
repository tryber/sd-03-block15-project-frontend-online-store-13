import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';
import Quantity from '../components/Quantity';
import ProductReview from '../components/productDetails/ProductReview';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      counter: 1,
      session: [],
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onIncrement() {
    const { available_quantity: availableQuantity } = this.props.location.details.product;
    this.setState((state) => ({ counter: Math.min(state.counter + 1, availableQuantity) }));
  }

  onDecrement() {
    this.setState((state) => ({ counter: Math.max(state.counter - 1, 1) }));
  }

  handleClick(product, qnt) {
    const { session } = this.state;
    const toAdd = {
      product,
      qnt,
    };
    this.setState((state) => ({ session: [...state.session, toAdd] }));
    localStorage.setItem('cart', JSON.stringify([...session, toAdd]));
  }

  handleChange(opp) {
    if (opp) {
      this.onIncrement();
    } else {
      this.onDecrement();
    }
  }

  freeShippingLabel() {
    const { shipping } = this.props.location.details.product;
    if (shipping.free_shipping) {
      return (
        <span data-testid="free-shipping">Free Shipping!</span>
      );
    }
    return (
      <span />
    );
  }

  render() {
    const { title, price, thumbnail, attributes } = this.props.location.details.product;
    const { product, counter } = this.state;
    return (
      <div className="product-details-page-container">
        <div className="product-details-h1-name">
          <h1 data-testid="product-detail-name">{title}</h1>
          <h2>{`R$ ${Number(price).toFixed(2)}`}</h2>
          {this.freeShippingLabel()}
        </div>
        <div className="produc-details-contents">
          <div className="product-details-left">
            <img src={thumbnail} alt={`Foto do ${title}`} />
          </div>
          <div className="product-details-right">
            <h3>Especificações Técnicas</h3>
            <ul>
              {attributes.map((e) => (<li key={e.id}>{`${e.name}: ${e.value_name}`}</li>))}
            </ul>
          </div>
        </div>
        <Quantity prodQnt={this.handleChange} counter={counter} />
        <Link
          to={{ pathname: '/cart', details: { product, qnt: counter } }}
        >
          <button type="button"
            onClick={() => this.handleClick(this.props.location.details.product, 1)}
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </Link>
        <ProductReview />
      </div>
    );
  }
}

export default ProductDetails;
