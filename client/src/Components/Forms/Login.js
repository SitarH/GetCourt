import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { LogIn } from '../../store/auth'
import { apiAddress } from '../../api';
import { fetchUserData } from '../../store/authActions';


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { value: enteredPhoneNumber,
        isValid: enteredPhoneNumbersValid,
        InputChangeHandler: PhoneNumberChangeHandler,
        InputBlurHandler: PhoneNumberBlurHandler,
        Reset: ResetPhoneNumber
    } = useInput(value => value.trim() !== '');

    const { value: enteredPassword,
        isValid: enteredPasswordIsValid,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredPhoneNumbersValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const FormSubmitHandler = async (event) => {
        event.preventDefault();
        
        if (enteredPhoneNumber === '0000' && enteredPassword === '0000') {
            navigate('/admin');
        }
        else {
            const user = await fetchUserData(enteredPhoneNumber, enteredPassword);
            console.log(user)
            if (user === null) {
                alert('wrong details try again')
            }
            else {
                dispatch(LogIn(user));
                navigate('/home');
            }
        }

        ResetPhoneNumber();
        ResetPassword();

    }


    return (

        <Card style={{ height: '60vh' }}>
            <Form onSubmit={FormSubmitHandler}>
                <Title>Sign In</Title>
                <input type="tel" placeholder='Phone number'
                    value={enteredPhoneNumber}
                    onChange={PhoneNumberChangeHandler}
                    onBlur={PhoneNumberBlurHandler} />


                <input type="password" placeholder='Password'
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                    onBlur={PasswordBlurHandler} />

                <PurchaseButton disabled={!formIsValid} size={'20px'} width={'200px'} valid={formIsValid ? 'pointer' : 'unset'}>Submit</PurchaseButton>
                <div style={{ display: 'flex', marginTop: '10px', flexDirection: 'column' }}>
                    <h2>New user?</h2> <Button width="100px" onClick={() => navigate('/register')}>Sign up</Button>
                </div>
            </Form>
        </Card>

    )
}

export default Login