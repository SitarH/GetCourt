import React from 'react';
import Courts from '../Pages/CourtList';
import { useNavigate } from "react-router-dom";
import Card from '../Components/UI/Card'
import Title from '../Components/UI/Title'

function Location({ location }) {

  const navigate = useNavigate();

  return (
    <Card height={'200px'}>
    <Title onClick={() => navigate('/courts', { state: {value: location} })}>
      {location.beachName}
    </Title>
    </Card>
  )
}

export default Location