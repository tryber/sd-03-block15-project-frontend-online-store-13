import React from 'react';
import './BuyersInfo.css';


const estadosArr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
  'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

class BuyersInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { onChange } = this.props;
    onChange(name, value);
  }

  inputCreator(testId, htmlForID, title, type, name, value) {
    return (
      <label htmlFor={htmlForID}>
        <input
          data-testid={testId}
          type={type}
          id={htmlForID}
          name={name}
          placeholder={title}
          onChange={this.handleChange}
          value={value}
        />
      </label>
    );
  }

  inputCreatorStates() {
    return (
      <select onChange={this.handleChange} name="state">
        {estadosArr.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div className="personal-data-form-container">
        <h3>Informações do Comprador</h3>
        <form className="personal-data-form">
          {this.inputCreator('checkout-fullname', 'name', 'Nome completo', 'text', 'name')}
          {this.inputCreator('checkout-email', 'email', 'E-mail', 'email', 'email')}
          {this.inputCreator('checkout-cpf', 'cpf', 'CPF', 'text', 'cpf')}
          {this.inputCreator('checkout-phone', 'phone', 'Telefone', 'text', 'phone')}
          {this.inputCreator('checkout-cep', 'cep', 'CEP', 'text', 'cep')}
          {this.inputCreator('checkout-address', 'address', 'Endereço', 'text', 'address')}
          {this.inputCreator('checkout-comp', 'compl', 'Complemento', 'text', 'compl')}
          {this.inputCreator('checkout-adNumb', 'adNumb', 'Número', 'text', 'addressNum')}
          {this.inputCreator('checkout-city', 'city', 'Cidade', 'text', 'city')}
          {this.inputCreatorStates()}
        </form>
      </div>
    );
  }
}

export default BuyersInfo;
