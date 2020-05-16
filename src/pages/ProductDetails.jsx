import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';
import cartIcon from '../images/cart-icon.png';
import Quantity from '../components/Quantity';
import ProductReview from '../components/ProductReview';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      counter: 1,
      attributes: [],
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

  handleClick() {
    this.setState({ product: this.props.location.details.product });
  }

  handleChange(opp) {
    if (opp) {
      this.onIncrement();
    } else {
      this.onDecrement();
    }
  }

  render() {
    const { title, price, thumbnail, attributes } = this.props.location.details.product;
    return (
      <div>
        <div className="product-details-page-container">
          <div className="product-details-h1-name">
            <h1 data-testid="product-detail-name">{title}</h1>
            <h2>{`R$ ${Number(price).toFixed(2)}`}</h2>
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
          <Quantity prodQnt={this.handleChange} counter={this.state.counter} />
          <Link
            to={{ pathname: '/cart', details: { product: this.state.product, qnt: this.state.counter } }}
          >
            <button onClick={this.handleClick} data-testid="product-detail-add-to-cart">
              Adicionar ao Carrinho
            </button>
          </Link>
          <ProductReview />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
