import React from 'react';
import Button from '../Components/UI/Button';
import GameDetsCard from '../Components/UI/GameDetsCard';
import { useState } from 'react';
import AddFriends from '../Components/Popups/AddFriends'


function GameDetails({ game }) {

    const [togglePopUp, setTogglePopUp] = useState(false)


    return (
        <>
            <GameDetsCard backgroundColor={'#4EB69F'} padding={'10px'}>
                <p>{game.beachName}</p>
                <p>Court {game.courtInfo.courtId}</p>
                <p>{game.courtInfo.availableHours.hour}</p>
                <Button width={'70px'} padding={'5px'} onClick={() => setTogglePopUp(true)}>Book Now</Button>
            </GameDetsCard>

            {togglePopUp &&
                <AddFriends
                    toggleVal={togglePopUp}
                    setToggle={setTogglePopUp}
                    gameObj = {game} />}
        </>
    )
  
}

export default GameDetails