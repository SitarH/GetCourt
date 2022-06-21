import React from 'react';
import { useState } from 'react';

function useInput(inputValue) {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

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
            InputChangeHandler,
            InputBlurHandler,
            Reset
        }
    )
}

export default useInput