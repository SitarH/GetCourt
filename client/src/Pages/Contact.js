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

  const telAviv = { lat: 32.109333, lng: 34.855499 };

  const { value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
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

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+telAviv.lat+","+telAviv.lng);
  };

  const openMailClicked = () =>{
    window.location.href = "mailto:info@getcourt.co.il";
  }

  const callNumberClicked = () =>{
    window.open('tel:0732802800');
  }

  const FormSubmitHandler = (event) => {
    console.log('message sent :)')
    event.preventDefault();

    let formIsValid = false;

    if (enteredFirstNameIsValid &&
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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Form onSubmit={FormSubmitHandler}
        backgroundColor={'#F2C67D'}
        style={{ width: '350px', justifyContent: 'space-evenly' }}
        formHeight={'400px'}>
        <Title>Message us</Title>
        <input type="text" placeholder="Name"
          value={enteredFirstName}
          onChange={FirstNameChangeHandler}
          onBlur={FirstNameBlurHandler} />

        <input type="tel" placeholder="Phone Number"
          value={enteredPhoneNumber}
          onChange={PhoneNumberChangeHandler}
          onBlur={PhoneNumberBlurHandler} />
        <textarea placeholder="message"
          rows="5"
          cols="30"
          style={{
            backgroundColor: 'transparent',
            border: '3px solid #4EB69F',
            borderRadius: '10px'
          }}
        ></textarea>
        <PurchaseButton width="200px">Send </PurchaseButton>
      </Form>
      <Card
        direction={'column'}>
        <Title style={{ fontWeight: 'bold' }}>Get in touch!</Title>

        <Title size='30px'
        onClick={callNumberClicked}
        style={{ cursor: 'pointer' }}>
          <AiFillPhone style={{ color: '#4EB69F' }} />
          073-280-2800</Title>

        <Title size='30px'
        onClick={openMailClicked}
        style={{ cursor: 'pointer' }}>
          <AiOutlineMail style={{ color: '#4EB69F' }} />
          info@getcourt.co.il</Title>

        <Title size='30px'
        onClick={showInMapClicked}
        style={{ cursor: 'pointer' }}>
          <LocationOnIcon style={{ color: '#4EB69F' }} />
          Tel Aviv, Israel</Title>
      </Card>


    </div>
  )
}

export default Contact