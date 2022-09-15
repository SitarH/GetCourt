import React from 'react';
import {useEffect, useState} from 'react';
import GameDetails from '../Components/GameDetails';
import Wrapper from '../Components/UI/Wrapper';
import {apiAdress} from '../api';

function GamesList({ gameObj }) {

    const [availableGames, setAvailableGames] = useState([])


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
            body: JSON.stringify({date: "2022-08-04", time: "17:00"})
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
    <>
    {availableGames.map((game, index) => {
        return <GameDetails
          key={index}
          game={game}
          gameObj= {gameObj}
        />
      })}
      </>
      
  )
}

export default GamesList