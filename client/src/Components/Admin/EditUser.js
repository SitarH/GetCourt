import React from 'react';
import useInput from '../../Hooks/useInput';
import EditForm from './EditFormUI';
import Title from '../UI/Title';
import Button from '../UI/Button';
import { apiAdress } from '../../api';

function EditUser({ id, user }) {
console.log(user)
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
        enteredBirthDateIsValid &&
        enteredLevelsValid) {

        formIsValid = true;
    }


    const FormSubmitHandler = (event) => {
        event.preventDefault();
        UpdateUser()

        ResetFirstName();
        ResetLastName();
        ResetPhoneNumber();
        ResetBirthDate();
        ResetLevel();
    }

    const UpdateUser = async () => {
        await fetch(`${apiAdress}/api/GetCourt/user/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phoneNumber: enteredPhoneNumber,
                firstName: enteredFirstName,
                lastName: enteredLastName,
                dateOfBirth: enteredBirthDate,
                friendsList: [],
                gamesList: [],
                ordersList: [],
                level: enteredLevel
            }),
        });
    };

    // const userDetails = {
    //     method: 'PUT',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         phoneNumber: enteredPhoneNumber,
    //         firstName: enteredFirstName,
    //         lastName: enteredLastName,
    //         dateOfBirth: enteredBirthDate,
    //         friendsList: [],
    //         gamesList: [],
    //         ordersList: [],
    //         level: enteredLevel
    //     })
    // };
    // try {
    //     const response = await fetch(`${apiAdress}/api/GetCourt/user/${id}`, userDetails);
    //     const data = await response.json();
    //     console.log(data);
    //     // return data;
    // } catch (e) {
    //     return e;
    // }


return (
    <EditForm onSubmit={FormSubmitHandler}>

        <input type="text" placeholder={user.firstName}
            value={enteredFirstName}
            onChange={FirstNameChangeHandler}
            onBlur={FirstNameBlurHandler} />

        <input type="text" placeholder={user.lastName}
            value={enteredLastName}
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler} />

        <input type="tel" placeholder={user.phone}
            value={enteredPhoneNumber}
            onChange={PhoneNumberChangeHandler}
            onBlur={PhoneNumberBlurHandler} />


        <input type="date" placeholder="Birth Date" className="edit"
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

        <Button> Update</Button>
    </EditForm>
)
}

export default EditUser; 