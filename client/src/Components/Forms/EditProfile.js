import React from 'react';
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';

function EditProfile() {
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
    } = useInput(value => value);

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
        console.log('profile edited :)')
        event.preventDefault();

        fetch('http://localhost:5008/api/GetCourt/user/62b1b8d25ac79c104dcfcbae', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phoneNumber: enteredPhoneNumber,
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
        ResetPhoneNumber();
        ResetPassword();
        ResetBirthDate();
        ResetLevel();
    }

    return (
        <Form onSubmit={FormSubmitHandler}>
            <Title>Edit Your Profile </Title>

            <input type="text" placeholder="First Name"
                value={enteredFirstName}
                onChange={FirstNameChangeHandler}
                onBlur={FirstNameBlurHandler} />

            <input type="text" placeholder="Last Name"
                value={enteredLastName}
                onChange={LastNameChangeHandler}
                onBlur={LastNameBlurHandler} />

            <input type="tel" placeholder="Phone Number"
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
            
            <PurchaseButton> Update</PurchaseButton>
        </Form>
    )
}

export default EditProfile