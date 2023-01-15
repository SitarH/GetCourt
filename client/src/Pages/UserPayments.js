import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../Hooks/useInput';
import PurchaseButton from '../Components/UI/PurchaseButton';
import Card from '../Components/UI/Card';
import Form from '../Components/UI/Form';
import Wrapper from '../Components/UI/Wrapper';
import Title from '../Components/UI/Title';
import { apiAddress } from '../api';
import CardsTable from '../Components/UI/TableCards';


function UserPayments() {

  const currentUserId = useSelector(state => state.auth.loggedUser._id)

  const { value: enteredCreditCard,
    InputChangeHandler: CreditCardChangeHandler,
    InputBlurHandler: CreditCardBlurHandler,
    Reset: ResetCreditCard
  } = useInput(value => value);

  const { value: enteredExpirationDate,
    InputChangeHandler: ExpirationDateChangeHandler,
    InputBlurHandler: ExpirationDateBlurHandler,
    Reset: ResetExpirationDate
  } = useInput(value => value);

  const { value: enteredCVV,
    InputChangeHandler: CVVChangeHandler,
    InputBlurHandler: CVVBlurHandler,
    Reset: ResetCVV
  } = useInput(value => value);


  const AddCard = async () => {
    let res = await fetch(`${apiAddress}/api/GetCourt/user/payment/${currentUserId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        enteredCreditCard, enteredExpirationDate, enteredCVV
      })
    });
    let data = await res.json();
  }

  const PurchaseHandler = (event) => {
    event.preventDefault();

    AddCard();
    Reset();
  }

  const Reset = () => {
    ResetCreditCard();
    ResetExpirationDate();
    ResetCVV();
  }

  return (
    <Wrapper>
      <Card height={'350px'}
        width={'400px'}
        backgroundColor={'#F2C67D'}
      >
        <Form onSubmit={PurchaseHandler}>

          <input type="text" placeholder='Card number'
            value={enteredCreditCard}
            onChange={CreditCardChangeHandler}
            onBlur={CreditCardBlurHandler} />

          <input type="text" placeholder='Expiration date'
            value={enteredExpirationDate}
            onChange={ExpirationDateChangeHandler}
            onBlur={ExpirationDateBlurHandler} />

          <input type="text" placeholder='CVV'
            value={enteredCVV}
            onChange={CVVChangeHandler}
            onBlur={CVVBlurHandler} />

          <PurchaseButton type='submit'
            width={"200px"}
          >Save card</PurchaseButton>
        </Form>

      </Card>
      <Card height={'350px'}
        width={'400px'}
        backgroundColor={'#F2C67D'}
        direction={'column'}>
        <Title>Saved cards</Title>
        <CardsTable />
      </Card>
    </Wrapper>
  )
}

export default UserPayments