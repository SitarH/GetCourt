import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';


function Courts() {

  const navigate = useNavigate();
  const location = useLocation();

  const courts = location.state.value.court;
  console.log(courts);

  const [courtsNumbers, setCourtsNumbers] = useState([])

  useEffect(() => {

    fetchCourts()

  }, [])

  const fetchCourts = async () => {

    const courtNumsPromise = await courts.map(async (item) => {
      const respone = await fetch(`http://localhost:5008/api/GetCourt/court/` + item);
      const data = await respone.json();
      return data
    });

    Promise.all(courtNumsPromise).then(court => setCourtsNumbers(court));

  }

  return (
    <Wrapper>
      {courtsNumbers.map((courtNumber, index) => {
        return <Card
          key={index}
          onClick={() => navigate('/court', { state: { value: courtNumber } })}
        >
          <Title>{courtNumber.courtId}</Title>
        </Card>
      })}
    </Wrapper>
  )
}

export default Courts