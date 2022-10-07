import React from 'react';
import useInput from '../Hooks/useInput';
import Form from '../Components/UI/Form';
import Title from '../Components/UI/Title';
import PurchaseButton from '../Components/UI/PurchaseButton';
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  const { value: enteredFirstName,
    isValid: enteredFirstNameisValid,
    InputChangeHandler: FirstNameChangeHandler,
    InputBlurHandler: FirstNameBlurHandler,
    Reset: ResetFirstName
  } = useInput(value => value);

  const { value: enteredLastName,
    isValid: enteredLastNameIsValid,
    InputChangeHandler: LastNameChangeHandler,
    InputBlurHandler: LastNameBlurHandler,
    Reset: ResetLastName
  } = useInput(value => value);

  const { value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    InputChangeHandler: PhoneNumberChangeHandler,
    InputBlurHandler: PhoneNumberBlurHandler,
    Reset: ResetPhoneNumber
  } = useInput(value => value);

  const { value: enteredText,
    isValid: enteredTextsValid,
    InputChangeHandler: TextChangeHandler,
    InputBlurHandler: TextBlurHandler,
    Reset: ResetText
  } = useInput(value => value);

  const FormSubmitHandler = (event) => {
    console.log('message sent :)')
    event.preventDefault();

    let formIsValid = false;

    if (enteredFirstNameisValid &&
      enteredLastNameIsValid &&
      enteredPhoneNumberIsValid &&
      enteredTextsValid) {
      formIsValid = true;
    }

    ResetFirstName();
    ResetLastName();
    ResetPhoneNumber();
    ResetText();
  }
  return (
    <div>
      <Form onSubmit={FormSubmitHandler}>
        <Title>Contact Us </Title>
        <input type="text" placeholder="First Name"
          value={enteredFirstName}
          onChange={FirstNameChangeHandler}
          onBlur={FirstNameBlurHandler} />

        <input type="text" placeholder="Last Name"
          value={enteredLastName}
          onChange={LastNameChangeHandler}
          onBlur={LastNameBlurHandler} />

        <input type="tel" placeholder="Phone Number"
          value={enteredPhoneNumber}
          onChange={PhoneNumberChangeHandler}
          onBlur={PhoneNumberBlurHandler} />
        <PurchaseButton>Send Message </PurchaseButton>
        <Title><AiFillPhone /> 073-280-2800</Title>
        <Title><AiOutlineMail /> info@getcourt.co.il </Title>
      </Form>

    </div>
  )
}

export default Contact