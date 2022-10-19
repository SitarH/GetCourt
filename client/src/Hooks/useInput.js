import React from 'react';
import { useState } from 'react';

function useInput(ValidateValue) {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = ValidateValue(enteredValue);

    const InputChangeHandler = (event) => {
        console.log('value->', event.target.value)
        setEnteredValue(event.target.value);

        // if (event.target.value.trim() !== '')
        //     setEnteredValueIsValid(true)
    };

    const InputBlurHandler = () => {
        setIsTouched(true);
        // if (enteredValue.trim() ===''){
        //     setEnteredValueIsValid(true);
        //     return
        // }
    }

    const Reset = () => {
        setEnteredValue('');
        setIsTouched(false);

    }

    return (
        {
            value: enteredValue,
            isValid: valueIsValid,
            InputChangeHandler,
            InputBlurHandler,
            Reset
        }
    )
}

export default useInput