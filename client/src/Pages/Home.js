import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Location from '../Components/Location'
import Courts from './CourtList';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';

function Home() {

  const [locations, setLocations] = useState([])

  useEffect(() => {

    fetchLocations()

  }, [])
  
  const fetchLocations = async () => {
    try {
      const respone = await fetch('http://localhost:5008/api/GetCourt/location');
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
      <Card height={'200px'}>Next available Games</Card>
      {locations.map((location) => {
        return <Location 
        key={location._id} 
        location={location} 
      />
      })}
    </Wrapper>

  )
}

export default Home