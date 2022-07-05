import React from 'react';
import { useNavigate } from "react-router-dom";
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';

function Login() {

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
        const currentUser = await fetchdata();
        console.log(currentUser)
        if(!currentUser)
            alert('user not found')
        else
            navigate('/');

        ResetEmail();
        ResetPassword();
        
    }

    const fetchdata = async () =>{
        const response = await fetch('http://localhost:5008/api/GetCourt/user');
        const data = await response.json();
        const exist = data.find(user => user.email ===enteredEmail && user.password === enteredPassword);
        return exist;
    }


    return (
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
    )
}

export default Login