import React from 'react';
import Courts from '../Pages/CourtList';
import { useNavigate } from "react-router-dom";
import Card from '../Components/UI/Card'
import Title from '../Components/UI/Title'

function Location({ locationObj, game, setGame }) {

  const navigate = useNavigate();

  const LocationHandler = () => {

    navigate('/courts', { state: { gameOrder: game, location: locationObj } });
  }

  return (
    <Card height={'200px'}>
      <Title onClick={LocationHandler}>
        {locationObj.beachName}
      </Title>
    </Card>
  )
}

export default Location