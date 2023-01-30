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
                    <input placeholder='Card name' />
                    <input placeholder='Card number' />
                    <input placeholder='CVV' />
                </Form>
                {/* <Button width={'130px'}
                    padding={'10px'} onClick={() => { setOpenCards(true) }}>Use saved card</Button> */}
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