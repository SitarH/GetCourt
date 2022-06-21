import React from 'react';
import useInput from '../../Hooks/useInput';

function Login() {
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

    const FormSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('email->', enteredEmail)
        console.log('pass->', enteredPassword)
        ResetEmail();
        ResetPassword();
    }


    return (
        <form onSubmit={FormSubmitHandler}>
            <label>Email:</label>
            <input type="email" 
            value={enteredEmail} 
            onChange={EmailChangeHandler} 
            onBlur={EmailBlurHandler}/>
           
            <label>Password:</label>
            <input type="password" 
            value={enteredPassword} 
            onChange={PasswordChangeHandler} 
            onBlur={PasswordBlurHandler}/>

            <button disabled={!formIsValid}>Submit</button>
        </form>
    )
}

export default Login