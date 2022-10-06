import React, {useRef, useEffect} from 'react';
import Courts from '../Pages/CourtList';
import { useNavigate } from "react-router-dom";
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import lottie from 'lottie-web';

function Location({ locationObj, game, setGame }) {

  const navigate = useNavigate();
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Asset/Lottie/location.json')
    })
   
  }, [])
  

  const LocationHandler = () => {

    navigate('/courts', { state: { gameOrder: game, location: locationObj } });
  }

  return (
    <Card height={'100px'}>
      <div style={{height: '50px'}} ref={container}></div>
      <Title style={{cursor: 'pointer'}} onClick={LocationHandler}>
        {locationObj.beachName}
      </Title>
    </Card>
  )
}

export default Location