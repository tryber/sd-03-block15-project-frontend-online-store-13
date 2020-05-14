import React from 'react';

class SumPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    }
  }

  componentDidMount() {
    this.props.products.map((product) => {
      this.setState((state) => ({ sum: state.sum + product.price }));
    })
  }

  render() {
    return (
      <p>R${this.state.sum.toFixed(2)}</p>
    )
  }
}

export default SumPrice;
