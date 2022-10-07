import React from 'react';
import Order from './Order';
import Payment from './Forms/Payment';
import Wrapper from '../Components/UI/Wrapper';
import { useLocation } from 'react-router-dom';


function Checkout() {

  const { state } = useLocation();
  const { gameOrder } = state;

  return (
    <Wrapper style={{justifyContent: 'space-evenly'}} direction={'row'}>
      <Order game={gameOrder} />
      <Payment game={gameOrder} />
    </Wrapper>

  )
}

export default Checkout