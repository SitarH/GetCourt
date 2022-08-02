import React from 'react'
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { sendRegisterData }  from '../../store/authActions';
import {useNavigate} from 'react-router-dom'

function Register() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    } = useInput(value => value.includes('@'));

    const { value: enteredPassword,
        isValid: enteredPasswordIsValid,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value => value);

    const { value: enteredBirthDate,
        isValid: enteredBirthDateIsValid,
        InputChangeHandler: BirthDateChangeHandler,
        InputBlurHandler: BirthDateBlurHandler,
        Reset: ResetBirthDate
    } = useInput(value => value);

    const { value: enteredLevel,
        isValid: enteredLevelsValid,
        InputChangeHandler: LevelChangeHandler,
        InputBlurHandler: LevelBlurHandler,
        Reset: ResetLevel
    } = useInput(value => value);

    let formIsValid = false;

    if (enteredFirstNameisValid &&
        enteredLastNameIsValid &&
        enteredPhoneNumberIsValid &&
        enteredPasswordIsValid &&
        enteredBirthDateIsValid &&
        enteredLevelsValid) {

        formIsValid = true;
    }


    const FormSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(sendRegisterData({enteredPhoneNumber,
            enteredFirstName,
            enteredLastName,
            enteredPassword,
            enteredBirthDate,
            enteredLevel}));

        ResetFirstName();
        ResetLastName();
        ResetPhoneNumber();
        ResetPassword();
        ResetBirthDate();
        ResetLevel();

        navigate('/login');
    }
    

    return (
        <Form onSubmit={FormSubmitHandler}>
            <Title>Register</Title>

            <input type="text" placeholder="First Name"
                value={enteredFirstName}
                onChange={FirstNameChangeHandler}
                onBlur={FirstNameBlurHandler} />

            <input type="text" placeholder="Last Name"
                value={enteredLastName}
                onChange={LastNameChangeHandler}
                onBlur={LastNameBlurHandler} />

            <input type="PhoneNumber" placeholder="Phone Number"
                value={enteredPhoneNumber}
                onChange={PhoneNumberChangeHandler}
                onBlur={PhoneNumberBlurHandler} />

            <input type="password" placeholder="Password"
                value={enteredPassword}
                onChange={PasswordChangeHandler}
                onBlur={PasswordBlurHandler} />

            <input type="date" placeholder="Birth Date"
                value={enteredBirthDate}
                onChange={BirthDateChangeHandler}
                onBlur={BirthDateBlurHandler} />

            <select value={enteredLevel}
                onChange={LevelChangeHandler}
                onBlur={LevelBlurHandler}>
                <option value={"disable"} selected hidden>Choose level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>

            <PurchaseButton type="submit" disabled={!formIsValid}>Submit</PurchaseButton>
        </Form>
    )
}

export default Register