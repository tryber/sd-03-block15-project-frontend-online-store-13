import React from 'react';
import './ChangeQnt.css';

class ChangeQnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      qnt: 1, 
      price: this.props.price,
    };
    this.reduceQnt = this.reduceQnt.bind(this);
    this.increaseQnt = this.increaseQnt.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }

  changePrice() {
    this.setState((state) => ({ price: this.props.price * state.qnt }));
  }

  reduceQnt() {
    if (this.state.qnt > 1) {
      this.setState((state) => ({ qnt: state.qnt - 1 }));
      this.changePrice();
      this.props.onChange(this.state.price);
    }
  }

  increaseQnt() {
    if (this.state.qnt < this.props.max) {
      this.setState((state) => ({ qnt: state.qnt + 1 }));
      this.changePrice();
      this.props.onChange(this.state.price);
    }
  }

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.price);
    }
  }

  render() {
    return (
      <div className='qntPriceComp'>
        <div className="changeQtnComp">
          <button data-testid="product-decrease-quantity" onClick={this.reduceQnt}> - </button>
          <p>{this.state.qnt}</p>
          <button data-testid="product-increase-quantity" onClick={this.increaseQnt}> + </button>
        </div>
        <div>
          <p>{`R$${this.state.price.toFixed(2)}`}</p>
        </div>
      </div>
    );
  }
}

export default ChangeQnt;
