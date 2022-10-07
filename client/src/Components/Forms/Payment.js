import React from 'react';
import Card from '../UI/Card';
import useInput from '../../Hooks/useInput';
import Form from '../UI/Form';
import PurchaseButton from '../UI/PurchaseButton';
import Button from '../UI/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../../store/gameOrder';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Payment({ game }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.loggedUser)

    const PurchaseHandler = () => {

        dispatch(gameOrderActions.AddNewGame({ id: user._id, gameOrder: game }));
        navigate('/confirmation');
    }

    return (
        <Card height={'350px'} width={'350px'} backgroundColor={'#F2C67D'} direction={'column'}>
            <Form>
                <input type="email" placeholder='Card name'
                />

                <input type="email" placeholder='Card number'
                />

                <input type="email" placeholder='CVV'
                />

            </Form>
            <Button width={'200px'} padding={'10px'}>Use saved card</Button>
            <PurchaseButton onClick={PurchaseHandler}>Confirm</PurchaseButton>

        </Card>
    )
}

export default Payment;