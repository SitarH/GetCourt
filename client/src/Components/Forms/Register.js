import React from 'react'
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import Title from '../UI/Title';
import PurchaseButton from '../UI/PurchaseButton';
import { sendRegisterData } from '../../store/authActions';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Register() {

 
    const navigate = useNavigate();

    const { value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        InputChangeHandler: FirstNameChangeHandler,
        InputBlurHandler: FirstNameBlurHandler,
        Reset: ResetFirstName
    } = useInput(value => value.trim() !== '');

    const { value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        InputChangeHandler: LastNameChangeHandler,
        InputBlurHandler: LastNameBlurHandler,
        Reset: ResetLastName
    } = useInput(value => value.trim() !== '');

    const { value: enteredPhoneNumber,
        isValid: enteredPhoneNumberIsValid,
        hasError: phoneNumberHasError,
        InputChangeHandler: PhoneNumberChangeHandler,
        InputBlurHandler: PhoneNumberBlurHandler,
        Reset: ResetPhoneNumber
    } = useInput(value => value);

    const { value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordHasError,
        InputChangeHandler: PasswordChangeHandler,
        InputBlurHandler: PasswordBlurHandler,
        Reset: ResetPassword
    } = useInput(value => value);

    const { value: enteredBirthDate,
        isValid: enteredBirthDateIsValid,
        hasError: dateOfBirthHasError,
        InputChangeHandler: BirthDateChangeHandler,
        InputBlurHandler: BirthDateBlurHandler,
        Reset: ResetBirthDate
    } = useInput(value => value);

    const { value: enteredLevel,
        isValid: enteredLevelsValid,
        hasError: levelHasError,
        InputChangeHandler: LevelChangeHandler,
        InputBlurHandler: LevelBlurHandler,
        Reset: ResetLevel
    } = useInput(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredFirstNameIsValid &&
        enteredLastNameIsValid &&
        enteredPhoneNumberIsValid &&
        enteredPasswordIsValid &&
        enteredBirthDateIsValid &&
        enteredLevelsValid) {

        formIsValid = true;
    }

  


    const FormSubmitHandler = async (event) => {
        event.preventDefault();

        const userDetails = {
            enteredPhoneNumber,
            enteredFirstName,
            enteredLastName,
            enteredPassword,
            enteredBirthDate,
            enteredLevel
        }

        const response = await sendRegisterData(userDetails);

        if (response.acknowledged) {
            navigate('/login');
        }
        else {
            alert('OOPS something went wrong, please try again')
        }

        ResetFirstName();
        ResetLastName();
        ResetPhoneNumber();
        ResetPassword();
        ResetBirthDate();
        ResetLevel();

    }


    return (
        <Form onSubmit={FormSubmitHandler}>
            <Title>Register</Title>
            <div>
                <input type="text" placeholder="First Name"
                
                    style={{ marginRight: '50px' }}
                    value={enteredFirstName}
                    onChange={FirstNameChangeHandler}
                    onBlur={FirstNameBlurHandler} />
                {firstNameHasError && <p>Please enter a first name</p>}

                <input type="text" placeholder="Last Name"
                
                    value={enteredLastName}
                    onChange={LastNameChangeHandler}
                    onBlur={LastNameBlurHandler} />
                {lastNameHasError && <p>Please enter a last name</p>}
            </div>
            <div>
                <input type="tel" placeholder="Phone Number"
                    pattern={'^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$'}
                    style={{ marginRight: '50px' }}
                    value={enteredPhoneNumber}
                    onChange={PhoneNumberChangeHandler}
                    onBlur={PhoneNumberBlurHandler} />
                {phoneNumberHasError && <p>Please enter a valid phone number</p>}

                <input type="password" placeholder="Password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                    onBlur={PasswordBlurHandler} />
                {passwordHasError && <p>Please enter a valid password</p>}
            </div>
            <div>
                <input type="date" placeholder="Birth Date"
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                    style={{ marginRight: '50px', fontSize: '17px' }}
                    value={enteredBirthDate}
                    onChange={BirthDateChangeHandler}
                    onBlur={BirthDateBlurHandler} />
                {dateOfBirthHasError && <p>Please enter your date of birth.</p>}

                <select value={enteredLevel}
                    onChange={LevelChangeHandler}
                    onBlur={LevelBlurHandler}>
                    <option value={"disable"} selected hidden>Choose level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                {levelHasError && <p>Please select a level</p>}
            </div>
            <PurchaseButton size={'20px'} width={'200px'} type="submit" disabled={!formIsValid}>Submit</PurchaseButton>
        </Form>
    )
}

export default Register