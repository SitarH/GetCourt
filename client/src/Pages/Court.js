import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddFriends from '../Components/Popups/AddFriends';
import {useDispatch} from 'react-redux';
import {gameOrderActions} from '../store/gameOrder';
import Title from '../Components/UI/Title';
import Wrapper from '../Components/UI/Wrapper';
import Button from '../Components/UI/Button';
import PurchaseButton from '../Components/UI/PurchaseButton';

function Court() {

    const dispatch = useDispatch();
    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false);

    useEffect(() => {
        dispatch(gameOrderActions.InsertIntoValue({field: 'court', value: currentCourt.courtId}))
    }, [])
    

    const SelectionHandler = (fieldVal, value) =>{
        console.log(value)
        dispatch(gameOrderActions.InsertIntoValue({field: fieldVal, value: value}))
        setTogglePopUp(true)
    }

    const PurchaseGameHandler = () =>{
        dispatch(gameOrderActions.AddNewGame())
    }

    return (
        <Wrapper>
            <Title>Court {currentCourt.courtId}</Title>
            <input type="date" 
            id="date" 
            onChange={(event)=>SelectionHandler('date',event.target.value)}
            ></input>

            <Title>Playing for?</Title>
            <Wrapper>
            {currentCourt.gameType.map((gameType, index) => {
                return <Button
                    key={index}
                    onClick={()=>SelectionHandler('type',gameType)}>
                    {gameType}
                </Button>
            }
            )}
            </Wrapper>
          
            <Title>Available Hours</Title>
            <Wrapper>
            {currentCourt.availableHours.map((hour, index) => {
                return <Button
                    key={index}
                    onClick={()=>SelectionHandler('time',hour)}>
                    {hour}
                </Button>
            }
            )}
            </Wrapper>

            {togglePopUp && 
            <AddFriends 
            toggleVal={togglePopUp} 
            setToggle={setTogglePopUp} />}

            <PurchaseButton onClick={PurchaseGameHandler}>Purchase Game</PurchaseButton>
        </Wrapper>

    )
}

export default Court