import React from 'react';
import './ProductDetails.css';
// import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      attributes: [],
    };
  }

  // componentDidMount() {
  //   const { search, id } = this.props.match.params;
  //   console.log(this.props);
  //   api.getProductsFromCategoryAndQuery(null, search).then((resp) => {
  //     const productDetails = resp.results.find((e) => e.id === id);
  //     this.setState({
  //       product: productDetails,
  //       attributes: productDetails.attributes,
  //     });
  //   });
  //   api.getCategories().then((resp) => {
  //     console.log(resp);
  //   });
  // }

  render() {
    const { title, price, thumbnail, attributes } = this.props.location.details.product;
    return (
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
              {attributes.map((e) => (
                <li key={e.id}>{`${e.name}: ${e.value_name}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <button>Adicionar ao Carrinho</button>
      </div>
    );
  }
}

export default ProductDetails;
