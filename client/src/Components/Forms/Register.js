import React from 'react'
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';

function Register() {

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

    const { value: enteredEmail,
        isValid: enteredEmailIsValid,
        InputChangeHandler: EmailChangeHandler,
        InputBlurHandler: EmailBlurHandler,
        Reset: ResetEmail
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
        enteredEmailIsValid &&
        enteredPasswordIsValid &&
        enteredBirthDateIsValid &&
        enteredLevelsValid) {

        formIsValid = true;
    }


    const FormSubmitHandler = (event) => {
        event.preventDefault();

        fetch('http://localhost:5008/api/GetCourt/user/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: enteredEmail,
                firstName: enteredFirstName,
                lastName: enteredLastName,
                password: enteredPassword,
                dateOfBirth: enteredBirthDate,
                friendsList: [],
                gamesList: [],
                ordersList: [],
                level: enteredLevel
            })
        })

        ResetFirstName();
        ResetLastName();
        ResetEmail();
        ResetPassword();
        ResetBirthDate();
        ResetLevel();
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

            <input type="email" placeholder="Email"
                value={enteredEmail}
                onChange={EmailChangeHandler}
                onBlur={EmailBlurHandler} />

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
            
            <PurchaseButton disabled={!formIsValid}>Submit</PurchaseButton>
        </Form>
    )
}

export default Register