import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Location from '../Components/Location'
import Courts from './CourtList';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import GamesList from '../Components/GamesList'
import {apiAdress} from '../api'

function Home() {

  const [locations, setLocations] = useState([]);

  const [gameOrder, setGameOrder] = useState({
    date: '',
    time: '',
    location: '',
    court: '',
    type: '',
    players: [],
  })

  useEffect(() => {

    fetchLocations()

  }, [])
  
  const fetchLocations = async () => {
    try {
      const respone = await fetch(`${apiAdress}/api/GetCourt/location`);
      if(respone.status === 200){
        const data = await respone.json();
        setLocations(data);
      }
    } catch (error) {
      console.log(error)
    }
    // const respone = await fetch('http://localhost:5008/api/GetCourt/location');
    // const data = await respone.json();
    // console.log(data);

  }


  return (
  
    <Wrapper>
      <Card height={'200px'} width={'950px'} backgroundColor={'#F2C67D'} direction={'column'}>
        <GamesList gameObj={gameOrder}/>
      </Card>
      {locations.map((location) => {
        return <Location 
        key={location._id} 
        locationObj={location}
        game={gameOrder} 
        setGame={setGameOrder}
      />
      })}
    </Wrapper>

  )
}

export default Home