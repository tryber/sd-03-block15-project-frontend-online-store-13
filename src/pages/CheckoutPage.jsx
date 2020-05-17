import React from 'react';
import BuyersInfo from '../components/checkoutPage/BuyersInfo';
import AllProducts from '../components/checkoutPage/AllProducts';
import PaymentMethods from '../components/checkoutPage/PaymentMethods';
import PurchaseButton from '../components/checkoutPage/PurchaseButton';

class CheckoutPage extends React.Component {
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
      payMethod: '',
    };
    this.changingState = this.changingState.bind(this);
  }

  gettingProductsLocalStorage() {
    const { compl } = this.state;
    console.log(compl);
    return JSON.parse(localStorage.getItem('cart'));
  }

  changingState(name, value) {
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <div>
          <div>
            <AllProducts products={this.gettingProductsLocalStorage()} />
          </div>
          <div>
            <BuyersInfo onChange={this.changingState} />
          </div>
          <div>
            <PaymentMethods onChange={this.changingState} />
            <PurchaseButton data={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
