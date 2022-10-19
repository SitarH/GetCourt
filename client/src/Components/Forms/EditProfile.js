import React from 'react';
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import { apiAdress } from '../../api';

function EditProfile({ id }) {

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

    if (enteredFirstNameisValid ||
        enteredLastNameIsValid ||
        enteredPhoneNumberIsValid ||
        enteredPasswordIsValid ||
        enteredBirthDateIsValid ||
        enteredLevelsValid) {

        formIsValid = true;
    }

    const FormSubmitHandler = (event) => {

        event.preventDefault();

        fetch(`${apiAdress}/api/GetCourt/user/${id}`, {
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
            <div>
                <input type="text" placeholder="First Name"
                    style={{ marginRight: '50px' }}
                    value={enteredFirstName}
                    onChange={FirstNameChangeHandler}
                    onBlur={FirstNameBlurHandler} />

                <input type="text" placeholder="Last Name"
                    value={enteredLastName}
                    onChange={LastNameChangeHandler}
                    onBlur={LastNameBlurHandler} />
            </div>
            <div>
                <input type="tel" placeholder="Phone Number"
                    style={{ marginRight: '50px' }}
                    value={enteredPhoneNumber}
                    onChange={PhoneNumberChangeHandler}
                    onBlur={PhoneNumberBlurHandler} />

                <input type="password" placeholder="Password"
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                    onBlur={PasswordBlurHandler} />
            </div>
            <div>
                <input type="date" placeholder="Birth Date"
                    style={{ marginRight: '50px' }}
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
            </div>
            <PurchaseButton width="200px" disabled={!formIsValid} valid={formIsValid? 'pointer' : 'unset'}> Update</PurchaseButton>
        </Form>
    )
}

export default EditProfile