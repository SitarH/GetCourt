import React from 'react';
import { useState, useEffect } from 'react';

function Home() {

  // why render twice????

  const [locations, setLocations] = useState([])

  useEffect(() => {

    fetchLocations()

  }, [])

  const fetchLocations = async () => {
    const respone = await fetch('http://localhost:5008/api/GetCourt');
    const data = await respone.json();
    setLocations(data)

  }



  return (
    <>
      {locations.map((location, index) => {
        return <button key={index} location={location}>
          {location.beachName}
        </button>
      })}
    </>

  )
}

export default Home