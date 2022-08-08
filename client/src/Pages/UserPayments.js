import React from 'react';
import Card from '../Components/UI/Card';
import Form from '../Components/UI/Form';
import { useState } from 'react';
import PurchaseButton from '../Components/UI/PurchaseButton';
import SavedCards from './SavedCards';
import Wrapper from '../Components/UI/Wrapper';
import useInput from '../Hooks/useInput';

function UserPayments() {

  const [AllSavedCards, setSavedCards] = useState(false);

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

  // let formIsValid = false;

  // if (enteredCreditCard) { formIsValid = true; }

  const Fetch = async () => {
    let res = await fetch('http://localhost:5008/api/GetCourt/user/payment/62b1b8d25ac79c104dcfcbae', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        enteredCreditCard, enteredExpirationDate, enteredCVV
      })
    });
    let data = await res.json();
    console.log(data);
  }
  const PurchaseHandler = (event) => {
    event.preventDefault();
    console.log('credit card saved :) ')

    Fetch();
    Reset();
  }

  const Reset = () => {
    ResetCreditCard();
    ResetExpirationDate();
    ResetCVV();
  }


  return (
    <>
      <Card height={'350px'}>
        <Form onSubmit={PurchaseHandler}>

          <input type="text" placeholder='Card number'
            value={enteredCreditCard}
            onChange={CreditCardChangeHandler}
            onBlur={CreditCardBlurHandler} />

          <input type="text" placeholder='Expiration Date'
            value={enteredExpirationDate}
            onChange={ExpirationDateChangeHandler}
            onBlur={ExpirationDateBlurHandler} />

          <input type="text" placeholder='CVV'
            value={enteredCVV}
            onChange={CVVChangeHandler}
            onBlur={CVVBlurHandler} />

          <PurchaseButton type='submit'>Add your card</PurchaseButton>
        </Form>

      </Card>
      <Wrapper> <PurchaseButton onClick={()=>{
        setSavedCards(prev=>!prev);
      }}>Show all saved cards</PurchaseButton></Wrapper>
      {AllSavedCards ? <SavedCards/> : null }
    </>
  )
}

export default UserPayments