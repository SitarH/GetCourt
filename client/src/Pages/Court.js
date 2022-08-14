import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddFriends from '../Components/Popups/AddFriends';
import {useDispatch} from 'react-redux';
import {gameOrderActions} from '../store/gameOrder';
import Title from '../Components/UI/Title';
import Wrapper from '../Components/UI/Wrapper';
import Button from '../Components/UI/Button';
import PurchaseButton from '../Components/UI/PurchaseButton';

function Court() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false);

    useEffect(() => {
        dispatch(gameOrderActions.InsertIntoValue({field: 'court', value: currentCourt.courtId}))
    }, [])

    useEffect(() => {
        fetchHours()


     
    }, [])

    const fetchHours = async () => {
        const Details = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({location: 'Yerushalaim', date: '2022-08-04'})
        };
        try {
            const response = await fetch(`http://localhost:5008/api/GetCourt/location/availableHours`, Details);
            const data = await response.json();
            console.log(data)
            return data;
        } catch (e) {
            return e;
        }  

    }
    

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const SelectionHandler = (fieldVal, value) =>{
        console.log(value)
        dispatch(gameOrderActions.InsertIntoValue({field: fieldVal, value: value}))
        if (fieldVal === 'time')
            setTogglePopUp(true)
    }

    const PurchaseGameHandler = () =>{
        navigate('/checkout');
    }

    return (
        <Wrapper className={'column'}>
            <Title>Court {currentCourt.courtId}</Title>
            <input type="date" 
            id= "date" 
            min= {disablePastDate()}
            onChange={(event)=>SelectionHandler('date',event.target.value)}
            ></input>

            <h2>Playing for?</h2>
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
          
            <h2>Available hours</h2>
            <Wrapper>
            {currentCourt.availableHours.map((item, index) => {
                return <Button
                    key={index}
                    onClick={()=>SelectionHandler('time',item.hour)}>
                    {item.hour}
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