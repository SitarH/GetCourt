import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddFriends from '../Components/Popups/AddFriends'

function Court() {

    const court = useLocation();
    const currentCourt = court.state.value;

    const [togglePopUp, setTogglePopUp] = useState(false)

    return (
        <>
            <h1>{currentCourt.courtId}</h1>

            {currentCourt.availableHours.map((hour, index) => {
                return <button
                    key={index}
                    onClick={() => setTogglePopUp(true)}>
                    {hour}
                </button>
            }
            )}

            {togglePopUp && <AddFriends />}
        </>

    )
}

export default Court