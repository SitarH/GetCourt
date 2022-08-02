import React from 'react';
import Card from '../UI/Card';
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import PurchaseButton from '../UI/PurchaseButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../../store/gameOrder';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';


function Payment() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.loggedUser)

    const PurchaseHandler = () => {
        console.log(user._id)
        dispatch(gameOrderActions.AddNewGame(user._id));
        navigate('/confirmation');
    }

    return (
        <Card height={'350px'}>
            <Form>
                <input type="email" placeholder='Card name'
                />

                <input type="email" placeholder='Card number'
                />

                <input type="email" placeholder='CVV'
                />

            </Form>
            <PurchaseButton onClick={PurchaseHandler}>Confirm</PurchaseButton>

        </Card>
    )
}

export default Payment;