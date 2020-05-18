import React from 'react';
import './PaymentMethods.css';
import mastercard from '../../images/mastercard.png';
import visa from '../../images/visa.png';
import creditcard from '../../images/creditcard.png';
import barras from '../../images/barras.png';

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

  creditCardInputCreator(title, htmlForId, src, alt) {
    return (
      <div className="credit-card-icon">
        <label htmlFor={htmlForId}>
          <input
            type="radio"
            onChange={this.handleChange}
            name="payMethod"
            id={htmlForId}
            value={title}
          />
          {title}
          <img src={src} alt={alt} />
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className="payment-method-container">
        <h3>Método de Pagamento</h3>
        <div className="billet-credit-card">
          <div>
            <h4>Cartão de Crédito</h4>
            <div className="credit-card-container">
              {this.creditCardInputCreator('Visa', 'visa', visa, 'Credit Visa')}
              {this.creditCardInputCreator('MasterCard', 'mastercard', mastercard, 'Credit Card MasterCard')}
              {this.creditCardInputCreator('Elo', 'elo', creditcard, 'Credit Card Elo')}
            </div>
          </div>
          <div className="billet-container">
            <h4>Boleto</h4>
            <div className="billet-radio-icon">
              <label htmlFor="billet">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="payMethod"
                  id="billet"
                  value="Boleto"
                />
                <img src={barras} alt="Código de barra" />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
