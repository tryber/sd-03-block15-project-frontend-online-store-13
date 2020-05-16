import React from 'react';

class FreeShipping extends React.Component {

  freeShippingLabel() {
    const { shipping } = this.props;
    if (shipping) {
      return (
        <span data-testid="free-shipping">Free Shipping!</span>
      );
    }
    return (
      <span />
    );
  }

  render() {
    return (
      <div>
        {this.freeShippingLabel()}
      </div>
    );
  }
}

export default FreeShipping;
