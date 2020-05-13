import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
  openPage() {
    console.log('working')
  }
  render() {
    const { title, price, thumbnail } = this.props.product;
    return(
      <div data-testid="product product-detail-link" onClick={this.openPage} className="productContainer" >
        <p>{title}</p>
        <img src={thumbnail}/>
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    )
  }
}

export default ProductCard;
