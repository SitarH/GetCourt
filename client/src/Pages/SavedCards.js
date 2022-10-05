import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';

function SavedCards() {

  const currentUserPayments = useSelector(state => state.auth.loggedUser.payments)

  return (

    <Wrapper className="column">
      <h2>Saved Cards </h2>
      {
        currentUserPayments.map((payment) => {
          return <Card alignItems={'baseline'}
            paddingLeft={'10px'}
            direction={'column'}
            backgroundColor={'#F2C67D'}
            width={'350px'}
            height={'100px'}>
            <p>Card number: {payment.enteredCreditCard}</p>
            <p>Card expiration date: {payment.enteredExpirationDate}</p>
          </Card>
        })
      }
    </Wrapper>
  )
}

export default SavedCards