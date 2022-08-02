import React, {useState} from 'react';
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

    // const [users, setUsers] = useState([])

    const { value: enteredPhoneNumber,
        isValid: enteredPhoneNumbersValid,
        InputChangeHandler: PhoneNumberChangeHandler,
        InputBlurHandler: PhoneNumberBlurHandler,
        Reset: ResetPhoneNumber
    } = useInput(value=> value.trim() !== '');

    const { value: enteredPassword,
        isValid: enteredPasswordIsValid,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value=> value.trim() !== '');

    let formIsValid = false;

    if(enteredPhoneNumbersValid && enteredPasswordIsValid){
        formIsValid = true;
    }

    const fetchData = async()=>{
        try {
            const respone = await fetch('http://localhost:5008/api/GetCourt/user');
            if(respone.status === 200){
              const data = await respone.json();
            
              return data
            }
          } catch (error) {
            console.log(error)
          }
    }

    const FormSubmitHandler = async (event) =>{
        event.preventDefault();
        
        const users = await fetchData();
        const user = users.find(user => user.password === enteredPassword && user.phoneNumber === enteredPhoneNumber)
        
        if (!user) {
            alert('wrong details try again')
        }
        else{
            dispatch(authActions.LogIn(user));
            navigate('/home');
        }
        
        ResetPhoneNumber();
        ResetPassword();
        
    }



    return (
        <Card>
        <Form onSubmit={FormSubmitHandler}>
           <Title>Login</Title>
            <input type="tel" placeholder='Phone Number' 
            value={enteredPhoneNumber} 
            onChange={PhoneNumberChangeHandler} 
            onBlur={PhoneNumberBlurHandler}/>
           
            
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