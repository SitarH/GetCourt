import React from 'react';
import useInput from '../../Hooks/useInput';

function Login() {
    const { value: enteredEmail,
        InputChangeHandler: EmailChangeHandler,
        InputBlurHandler: EmailBlurHandler,
        Reset: ResetEmail
    } = useInput(value=> value.includes('@'));

    const { value: enteredPassword,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value=> value);


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

            <button>Submit</button>
        </form>
    )
}

export default Login