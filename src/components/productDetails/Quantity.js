import React from 'react';

class Quantity extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.prodQnt(false)} type="button"> - </button>
        <p>{this.props.qnt}</p>
        <button onClick={() => this.props.prodQnt(true)} type="button"> + </button>
      </div>
    );
  }
}

export default Quantity;
