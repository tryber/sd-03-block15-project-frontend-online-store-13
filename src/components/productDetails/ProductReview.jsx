import React from 'react';

class ProductReview extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="text-area">
            Escreva sua avaliações
            <textarea data-testid="product-detail-evaluation" id="text-area" />
          </label>
        </form>
      </div>
    );
  }
}

export default ProductReview;
