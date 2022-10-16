import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import {apiAdress} from '../../api';

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
        const loginDetails = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phoneNum: enteredPhoneNumber, password: enteredPassword})
        };
        try {
            const respone = await fetch('http://localhost:5008/api/GetCourt/user'); //?
            if(respone.status === 200){
              const data = await respone.json();
            
              return data
            }
          } catch (error) {
            console.log(error)
          }
            const response = await fetch(`${apiAdress}/api/GetCourt/user/login`, loginDetails);
            const data = await response.json();
            console.log(data);
            return data;
        // } catch (e) {
        //     return e;
        // }  
    }

    const FormSubmitHandler = async (event) =>{
        event.preventDefault();
        console.log('??')
        
        const user = await fetchData();
        console.log(user);
        if (user === null) {
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
       
        <Card style={{ height: '60vh'}}>
        <Form onSubmit={FormSubmitHandler}>
           <Title>Sign In</Title>
            <input type="tel" placeholder='Phone number' 
            value={enteredPhoneNumber} 
            onChange={PhoneNumberChangeHandler} 
            onBlur={PhoneNumberBlurHandler}/>
           
            
            <input type="password" placeholder='Password' 
            value={enteredPassword} 
            onChange={PasswordChangeHandler} 
            onBlur={PasswordBlurHandler}/>

            <PurchaseButton disabled={!formIsValid} valid={formIsValid? 'pointer' : 'unset'}>Submit</PurchaseButton>
            <div style={{display: 'flex', marginTop: '10px', flexDirection: 'column'}}>
            <h2>New user?</h2> <Button width="100px" onClick={()=>navigate('/register')}>Sign up</Button>
            </div>
        </Form>
        </Card>
    
    )
}

export default Login