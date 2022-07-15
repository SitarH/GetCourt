import React from 'react';
import { useNavigate } from "react-router-dom";
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { value: enteredEmail,
        isValid: enteredEmailIsValid,
        InputChangeHandler: EmailChangeHandler,
        InputBlurHandler: EmailBlurHandler,
        Reset: ResetEmail
    } = useInput(value=> value.includes('@'));

    const { value: enteredPassword,
        isValid: enteredPasswordIsValid,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value=> value.trim() !== '');

    let formIsValid = false;

    if(enteredEmailIsValid && enteredPasswordIsValid){
        formIsValid = true;
    }

    const FormSubmitHandler = async (event) =>{
        event.preventDefault();

        const isLoggedIn = dispatch(authActions.LogIn({enteredEmail, enteredPassword}));
        console.log(isLoggedIn)
        if(!isLoggedIn)
            alert('user not found')
        else
            navigate('/');

        ResetEmail();
        ResetPassword();
        
    }



    return (
        <Card>
        <Form onSubmit={FormSubmitHandler}>
           <Title>Login</Title>
            <input type="email" placeholder='Email' 
            value={enteredEmail} 
            onChange={EmailChangeHandler} 
            onBlur={EmailBlurHandler}/>
           
            
            <input type="password" placeholder='Password' 
            value={enteredPassword} 
            onChange={PasswordChangeHandler} 
            onBlur={PasswordBlurHandler}/>

            <PurchaseButton disabled={!formIsValid}>Submit</PurchaseButton>
        </Form>
        </Card>
    )
}

export default Login