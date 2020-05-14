import React from 'react';

class ChangeQnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qnt: 1,
    }
    this.reduceQnt = this.reduceQnt.bind(this);
    this.increaseQnt = this.increaseQnt.bind(this);
  }

  reduceQnt() {
    if (this.state.qnt > 1) {
      this.setState((state) => ({
        qnt: state.qnt - 1,
      }));
    }
  }

  increaseQnt() {
    if (this.state.qnt < this.props.max) {
      this.setState((state) => ({
        qnt: state.qnt + 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <p onClick={this.reduceQnt}> - </p>
        <p>{this.state.qnt}</p>
        <p onClick={this.increaseQnt}> + </p>
      </div>
    )
  }
}

export default ChangeQnt;
