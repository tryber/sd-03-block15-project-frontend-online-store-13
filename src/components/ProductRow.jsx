import React from 'react';

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
      <div>
        <img src={thumbnail} alt={title} />
        <div>{title}</div>
        <div>{`R$ ${price.toFixed(2)}`}</div>
        <div>{`Quantidade: ${qnt}`}</div>
        <div>{`Total: R$ ${this.state.totalPrice}`}</div>
      </div>
    );
  }
}

export default ProductRow;
