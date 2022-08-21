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

function Court({ courtObj, game, setGame }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false);

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
            body: JSON.stringify({ location: 'Yerushalaim', date: '2022-08-04' })
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


    return (
        <div className="court">
            <h2>Court {courtObj.courtId}</h2>

            <p>Playing for?</p>
            <div className="rowDirection">
                {courtObj.gameType.map((gameType, index) => {
                    return <Button width={'90px'} padding={'3px'}
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
                    return <Button width={'90px'} padding={'3px'}
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

export default Court