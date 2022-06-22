import React from 'react';
import { useState, useEffect } from 'react'

function Courts(location) {

  const [courts, setCourts] = useState([])

  useEffect(() => {

    fetchCourts()

  }, [])

  const fetchCourts = async () => {
    const respone = await fetch('http://localhost:5008/api/GetCourt/location/627e71211d86d3c8756cb2c1');
    const data = await respone.json();
    const courts = data.court;

    const courtNums = await courts.map(async (item) =>{
      const respone = await fetch(`http://localhost:5008/api/GetCourt/court/`+item);
      const data = await respone.json();
      return data.courtId
    });
    Promise.all(courtNums).then(function(data) {
      console.log(data.courtId);
  })
    setCourts(courtNums)
    console.log(courtNums)
  }

  return (
    <>
      {courts.map((court, index) => {
        return <button key={index} location={location}>
          {console.log(court.courtId)}
        </button>
      })}
    </>
  )
}

export default Courts