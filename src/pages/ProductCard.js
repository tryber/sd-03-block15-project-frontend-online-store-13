import React from 'react';

class ProductCard extends React.Component {
  openPage() {
    console.log('working')
  }
  render() {
    const { title, price, thumbnail } = this.props.product;
    return(
      <div data-testid="product product-detail-link" onClick={this.openPage}>
        <p>{title}</p>
        <img src={thumbnail}/>
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    )
  }
}

export default ProductCard;
