import React from 'react';
import Card from '../Components/UI/Card';
import Form from '../Components/UI/Form';
import PurchaseButton from '../Components/UI/PurchaseButton';
import useInput from '../Hooks/useInput';

function UserPayments() {


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

  const Fetch = () => { fetch('http://localhost:5008/api/GetCourt/user/payment/62b1b8d25ac79c104dcfcbae', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      enteredCreditCard, enteredExpirationDate, enteredCVV
    })
  });}
  const PurchaseHandler = (event) => {
    event.preventDefault();
    console.log('credit card saved :) ')

    Fetch();
    // fetch('http://localhost:5008/api/GetCourt/user/payment/62b1b8d25ac79c104dcfcbae', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     enteredCreditCard, enteredExpirationDate, enteredCVV
    //   })
    // })
  }

  ResetCreditCard();
  ResetExpirationDate();
  ResetCVV();

  return (

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

      </Form>
      <PurchaseButton  >Add your card</PurchaseButton>

    </Card>
  )
}

export default UserPayments