import React from 'react';
// import AllProducts from '../components/AllProducts';
// import PurchaseButton from '../components/PurchaseButton';
import BuyersInfo from '../components/BuyersInfo';
// import PaymentMethods from '../components/PaymentMethods';

class CheckoutPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* <AllProducts /> */}
          <BuyersInfo />
          {/* <PaymentMethods /> */}
          {/* <PurchaseButton /> */}
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
