import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Location from '../Components/Location'
import Courts from './CourtList'

function Home() {

  const [locations, setLocations] = useState([])

  useEffect(() => {

    fetchLocations()

  }, [])

  
  const fetchLocations = async () => {
    const respone = await fetch('http://localhost:5008/api/GetCourt/location');
    const data = await respone.json();
    console.log(data);

    setLocations(data)

  }

  

  return (
    <>
      {locations.map((location) => {
        return <Location 
        key={location._id} 
        location={location} 
      />
      })}
    </>

  )
}

export default Home