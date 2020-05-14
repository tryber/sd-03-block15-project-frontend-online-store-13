import React from 'react';

class ChangeQnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qnt: 1 };
    this.reduceQnt = this.reduceQnt.bind(this);
    this.increaseQnt = this.increaseQnt.bind(this);
  }

  reduceQnt() {
    if (this.state.qnt > 1) {
      this.setState((state) => ({ qnt: state.qnt - 1 }));
    }
  }

  increaseQnt() {
    if (this.state.qnt < this.props.max) {
      this.setState((state) => ({ qnt: state.qnt + 1 }));
    }
  }

  render() {
    return (
      <div>
        <button data-testid="product-decrease-quantity"  onClick={this.reduceQnt}> - </button>
        <p>{this.state.qnt}</p>
        <button data-testid="product-increase-quantity" onClick={this.increaseQnt}> + </button>
      </div>
    );
  }
}

export default ChangeQnt;
