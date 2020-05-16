import React from 'react';
import './ProductDetails.css';
import ProductReview from '../components/productDetails/ProductReview';

class ProductDetails extends React.Component {

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
              {attributes.map((e) => (
                <li key={e.id}>{`${e.name}: ${e.value_name}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <ProductReview />
      </div>
    );
  }
}

export default ProductDetails;
