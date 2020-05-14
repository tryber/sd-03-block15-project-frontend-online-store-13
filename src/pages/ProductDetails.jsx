import React from 'react';
import './ProductDetails.css';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      attributes: [],
    };
  }

  componentDidMount() {
    const { category, id } = this.props.match.params;
    api.getProductsFromCategoryAndQuery(null, category).then((resp) => {
      const productDetails = resp.results.find((e) => e.id === id);
      this.setState({
        product: productDetails,
        attributes: productDetails.attributes,
      });
    });
    api.getCategories().then((resp) => {
      console.log(resp);
    });
  }

  render() {
    const { product, attributes } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div className="product-details-page-container">
        <div className="product-details-h1-name">
          <h1 data-testid="product-detail-name">{title}</h1>
          <h2>{`R$ ${price}`}</h2>
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
      </div>
    );
  }
}

export default ProductDetails;
