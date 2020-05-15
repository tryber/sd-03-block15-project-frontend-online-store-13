import React from 'react';

const estadosArr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
  'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

class BuyersInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      compl: '',
      addressNum: '',
      city: '',
      state: 'AC',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
    const { state } = this.state;
    return (
      <select onChange={this.handleChange} name="state" value={state}>
        {estadosArr.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    );
  }

  render() {
    const {
      name,
      email,
      cpf,
      phone,
      cep,
      address,
      compl,
      addressNum,
      city,
    } = this.state;
    return (
      <form>
        {this.inputCreator('checkout-fullname', 'name', 'Nome completo', 'text', 'name', name)}
        {this.inputCreator('checkout-email', 'email', 'E-mail', 'email', 'email', email)}
        {this.inputCreator('checkout-cpf', 'cpf', 'CPF', 'text', 'cpf', cpf)}
        {this.inputCreator('checkout-phone', 'phone', 'Telefone', 'text', 'phone', phone)}
        {this.inputCreator('checkout-cep', 'cep', 'CEP', 'text', 'cep', cep)}
        {this.inputCreator('checkout-address', 'address', 'Endereço', 'text', 'address', address)}
        {this.inputCreator('checkout-address', 'compl', 'Complemento', 'text', 'compl', compl)}
        {this.inputCreator('checkout-address', 'adNumb', 'Número', 'text', 'addressNum', addressNum)}
        {this.inputCreator('checkout-address', 'city', 'Cidade', 'text', 'city', city)}
        {this.inputCreatorStates()}
      </form>
    );
  }
}

export default BuyersInfo;
