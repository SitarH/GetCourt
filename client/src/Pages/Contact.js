import React from 'react';
import useInput from '../Hooks/useInput';
import Form from '../Components/UI/Form';
import Title from '../Components/UI/Title';
import Card from '../Components/UI/Card';
import PurchaseButton from '../Components/UI/PurchaseButton';
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Form onSubmit={FormSubmitHandler}
      backgroundColor={'#F2C67D'}
      style={{width: '350px'}}
      formHeight={'400px'}>
        <Title>Get in touch!</Title>
        <input type="text" placeholder="Name"
          value={enteredFirstName}
          onChange={FirstNameChangeHandler}
          onBlur={FirstNameBlurHandler} />

        <input type="tel" placeholder="Phone Number"
          value={enteredPhoneNumber}
          onChange={PhoneNumberChangeHandler}
          onBlur={PhoneNumberBlurHandler} />
          <textarea placeholder="message" rows="5" cols="30"></textarea>
          <PurchaseButton>Send Message </PurchaseButton>
          </Form>
       <Card
       direction={'column'}>
        <Title size='30px'><AiFillPhone />073-280-2800</Title>
        <Title size='30px'><AiOutlineMail />info@getcourt.co.il</Title>
        <Title size='30px'><LocationOnIcon />Tel Aviv, Israel</Title>
        </Card>
      

    </div>
  )
}

export default Contact