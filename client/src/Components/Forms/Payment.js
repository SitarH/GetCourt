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
import PopUp from '../UI/PopUp';
import TableCards from '../UI/TableCards';
import { AddGame } from '../../store/gameActions';
import { AddNewGame } from '../../store/gameOrder';


function Payment({ game }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.loggedUser)
    const [openCards, setOpenCards] = useState(false)

    const PurchaseHandler = async () => {
        const response= await AddGame(user._id, game)
        dispatch(AddNewGame(game));
        navigate('/confirmation');
    }

    return (
        <>
            <Card height={'350px'}
                width={'350px'}
                backgroundColor={'#F2C67D'}
                direction={'column'}>
                <Form>
                    <input placeholder='Card name' pattern="[A-Za-z]" />
                    <input type="number" placeholder='Card number' pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$" />
                    <input type="number" max="999" pattern="([0-9]|[0-9]|[0-9]{3}" placeholder='CVV' />
                </Form>
                <PurchaseButton width={'200px'} valid={'pointer'}
                    onClick={PurchaseHandler}>Confirm</PurchaseButton>
            </Card>
            {openCards && user.payments ?
                <PopUp>
                    <TableCards />
                    <Button width={'100px'}>save</Button>
                </PopUp> : openCards ?
                    <PopUp>
                        <h2>No saved cards</h2>
                    </PopUp> : null}

        </>
    )
}

export default Payment;