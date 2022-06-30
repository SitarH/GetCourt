import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddFriends from '../Components/Popups/AddFriends';
import {useDispatch} from 'react-redux';
import {gameOrderActions} from '../store/gameOrder';
import Title from '../Components/UI/Title';
import Wrapper from '../Components/UI/Wrapper';
import Button from '../Components/UI/Button';

function Court() {

    const dispatch = useDispatch();

    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false);

    const GameOrderHandler = (time) =>{
        console.log(time)
        dispatch(gameOrderActions.InsertIntoValue({field:'time', value: time}))
        setTogglePopUp(true)
    }

    return (
        <>
            <Title>Court {currentCourt.courtId}</Title>
            <input type="date" id=""></input>
            <Title>Playing for?</Title>
            <Button>For Fun</Button>
            <Button>Training</Button>
            <Button>Competition</Button>
            <br></br>
            <Title>Available Hours</Title>
            {currentCourt.availableHours.map((hour, index) => {
                return <Button
                    key={index}
                    onClick={()=>GameOrderHandler(hour)}>
                    {hour}
                </Button>
            }
            )}
            <button>Purchase Game</button>

            {togglePopUp && <AddFriends />}
        </>

    )
}

export default Court