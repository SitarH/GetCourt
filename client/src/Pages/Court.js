import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddFriends from '../Components/Popups/AddFriends';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../store/gameOrder';
import Title from '../Components/UI/Title';
import Wrapper from '../Components/UI/Wrapper';
import Button from '../Components/UI/Button';
import PurchaseButton from '../Components/UI/PurchaseButton';
import {apiAdress} from '../api';

function Court({ courtObj, game, setGame }) {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false);
    const [takenHours, setTakenHours] = useState([]);

    useEffect(() => {
        fetchHours();
    }, [])

    const fetchHours = async () => {
        const Details = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location: game.location, date: game.date, time: game.time })
        };
        try {
            const response = await fetch(`${apiAdress}/api/GetCourt/location/availableHours`, Details);
            const data = await response.json();
            setTakenHours(data);
            
        } catch (e) {
            return e;
        }

    }

   


    return (
        <div className="court">

            <p>Playing for?</p>
            <div className="rowDirection">
                {courtObj.gameType.map((gameType, index) => {
                    return <Button className={game.type === gameType && 'clicked'} width={'90px'} padding={'3px'}
                        key={index}
                        onClick={() => setGame({ ...game, type: gameType })}>
                        {gameType}
                    </Button>
                }
                )}
            </div>

            <p>Available hours</p>
            <div className="rowDirection">
                {courtObj.availableHours.map((item, index) => {
                    return takenHours.includes(item.hour)? <Button className='disabled' disabled={true} width={'90px'} padding={'3px'}>{item.hour}</Button> :
                     <Button className={game.time === item.hour && 'clicked'} width={'90px'} padding={'3px'}
                        key={index}
                        onClick={() => { setGame({ ...game, time: item.hour, court: courtObj.courtId }); setTogglePopUp(true) }}>
                        {item.hour}
                    </Button>
                }
                )}
            </div>

            {togglePopUp &&
                <AddFriends
                    toggleVal={togglePopUp}
                    setToggle={setTogglePopUp}
                    gameObj={game} />}
        </div>


    )
}

export default Court;