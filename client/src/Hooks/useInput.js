import React from 'react';
import { useState } from 'react';

function useInput(ValidateValue) {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = ValidateValue(enteredValue);

    const InputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const InputBlurHandler = () => {
        setIsTouched(true);
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