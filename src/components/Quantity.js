import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    }

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
  }

  onIncrement() {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  onDecrement() {
    this.setState(state => ({ counter: Math.max(state.counter - 1, 1) }))
  }

  render() {
    return (
      <div>
        <button onClick={this.onDecrement} type="button"> - </button>
        <p>{this.state.counter}</p>
        <button onClick={this.onIncrement} type="button"> + </button>
      </div>
    )
  }
}

export default Quantity;
