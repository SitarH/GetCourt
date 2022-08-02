import React from 'react';
import Order from './Order';
import Payment from './Forms/Payment';
import Wrapper from '../Components/UI/Wrapper';


function Checkout() {

  return (
    <Wrapper>
    <Order/>
    <Payment/>
    </Wrapper>

  )
}

export default Checkout