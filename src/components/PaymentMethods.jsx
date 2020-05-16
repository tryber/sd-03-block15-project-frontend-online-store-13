import React from 'react';
import './PaymentMethods.css';

class PaymentMethods extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   const { name, value } = event.target;
  //   const { onChange } = this.props;
  //   onChange(name, value);
  // }

  creditCardInputCreator(title, htmlForId) {
    return (
      <label htmlFor={htmlForId}>
        <input
          type="radio"
          onChange={this.handleChange}
          name="payMethod"
          id={htmlForId}
          value={title}
        />
        {title}
      </label>
    );
  }

  render() {
    return (
      <div className="payment-method-container">
        <h3>Método de Pagamento</h3>
        <div className="billet-credit-card">
          <div>
            <h4>Boleto</h4>
            <label htmlFor="billet">
              <input
                type="radio"
                onChange={this.handleChange}
                name="payMethod"
                id="billet"
                value="Boleto"
              />
              <img src="" alt="Código de barra" />
            </label>
          </div>
          <div>
            <h4>Cartão de Crédito</h4>
            {this.creditCardInputCreator('Visa', 'visa')}
            {this.creditCardInputCreator('MasterCard', 'mastercard')}
            {this.creditCardInputCreator('Elo', 'elo')}
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
