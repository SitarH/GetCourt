import React from 'react';
import Courts from '../Pages/CourtList';
import { useNavigate } from "react-router-dom";

function Location({ location }) {

  const navigate = useNavigate();

  return (
    <h1 onClick={() => navigate('/courts', { state: {value: location} })}>
      {location.beachName}
    </h1>
  )
}

export default Location