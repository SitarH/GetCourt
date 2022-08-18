import React from 'react';
import {useEffect, useState} from 'react';
import GameDetails from '../Components/GameDetails';
import Wrapper from '../Components/UI/Wrapper'

function GamesList() {

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
            const response = await fetch(`http://localhost:5008/api/GetCourt/location/NextAvailableGames`, gamesDetails);
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
        />
      })}
      </>
      
  )
}

export default GamesList