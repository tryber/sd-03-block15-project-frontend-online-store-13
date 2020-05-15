import React from 'react';
import './PurchaseButton.css';

class PurchaseButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      name, email, cpf, phone, cep, address,
      compl, addressNum, city, state, payMethod,
    } = this.props.data;

    alert(
      `Nome: ${name}
      E-mail: ${email}
      CPF: ${cpf}
      Phone: ${phone}
      CEP: ${cep}
      Endereço: ${address}
      Complmento: ${compl}
      Número: ${addressNum}
      Cidade: ${city}
      Estado: ${state}
      Método de Pagamento: ${payMethod}
      `,
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="purchase-btn-container">
        <button className="purchase-btn" type="button" onClick={this.handleClick}>Comprar</button>
      </div>
    );
  }
}

export default PurchaseButton;
