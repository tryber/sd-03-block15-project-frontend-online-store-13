import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
  }

  // componentDidUpdate() {
  //   this.setState({ totalPrice: })
  // }

  render() {
    const { thumbnail, price, title } = this.props.products;
    const { qnt } = this.props;
    return (
      <div className="all-products-container">
        <div className="all-products-container-left">
          <img src={thumbnail} alt={title} />
          <div className="all-products-container-right">
            <div>{title}</div>
            <div>{`R$ ${price.toFixed(2)}`}</div>
            <div>{`Quantidade: ${qnt}`}</div>
          </div>
        </div>
        <div className="total-price">
          <div>{`Total: R$ ${this.state.totalPrice}`}</div>
        </div>
      </div>
    );
  }
}

export default ProductRow;
