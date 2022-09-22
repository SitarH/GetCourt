import React from 'react';
import { useEffect, useState } from 'react';
import GameDetails from '../Components/GameDetails';
import Wrapper from '../Components/UI/Wrapper';
import { apiAdress } from '../api';

function GamesList({ gameObj }) {

    const [availableGames, setAvailableGames] = useState([])

    const currentDate = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-')
console.log(currentDate)
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });
   

    useEffect(() => {
        fetchAvailableGames();
        console.log(availableGames)
    }, [])


    const fetchAvailableGames = async () => {
        const gamesDetails = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: currentDate, time: currentTime })
        };
        try {
            const response = await fetch(`${apiAdress}/api/GetCourt/location/NextAvailableGames`, gamesDetails);
            const data = await response.json();
            console.log(data)
            setAvailableGames(data);
        } catch (e) {
            return e;
        }
    }


    return (
        <>{availableGames.length > 0 ?
            availableGames.map((game, index) => {
                return <GameDetails
                    key={index}
                    game={game}
                    gameObj={gameObj}
                />
            }) : <h2>Loading games</h2>}
        </>

    )
}

export default GamesList