import React from 'react'
import useInput from '../../Hooks/useInput';

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
        <form onSubmit={FormSubmitHandler}>
            <label>First Name :</label>
            <input type="text"
                value={enteredFirstName}
                onChange={FirstNameChangeHandler}
                onBlur={FirstNameBlurHandler} />

            <label>Last Name :</label>
            <input type="text"
                value={enteredLastName}
                onChange={LastNameChangeHandler}
                onBlur={LastNameBlurHandler} />

            <label>Email:</label>
            <input type="email"
                value={enteredEmail}
                onChange={EmailChangeHandler}
                onBlur={EmailBlurHandler} />

            <label>Password:</label>
            <input type="password"
                value={enteredPassword}
                onChange={PasswordChangeHandler}
                onBlur={PasswordBlurHandler} />

            <label>Birth Date :</label>
            <input type="date"
                value={enteredBirthDate}
                onChange={BirthDateChangeHandler}
                onBlur={BirthDateBlurHandler} />

            <label>Level :</label>
            <select value={enteredLevel}
                onChange={LevelChangeHandler}
                onBlur={LevelBlurHandler}>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>

            <button disabled={!formIsValid}>Submit</button>
        </form>
    )
}

export default Register