import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import {useDispatch} from 'react-redux';
import {gameOrderActions} from '../store/gameOrder';


function Courts() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [courts, setCourts] = useState(location.state.value.court)
  // const courts = location.state.value.court;
 

  const [courtsNumbers, setCourtsNumbers] = useState([])

  useEffect(() => {
    dispatch(gameOrderActions.InsertIntoValue({field: 'location', value: location.state.value.beachName}))
   if (courts?.length > 0)
      fetchCourts()

  }, [courts])

  const fetchCourts = async () => {

    const respone = await fetch(`http://localhost:5008/api/GetCourt/court/arr/${courts.join()}`)
    const data = await respone.json();
    console.log(data)
    setCourtsNumbers(data)
    



    // const courtNumsPromise = await courts.map(async (item) => {
    //   console.log(item)
    //   const respone = await fetch(`http://localhost:5008/api/GetCourt/court/${item}`);
    //   console.log(respone)
    //   const data = await respone.json();
    //   return data
    // });

    // Promise.all(courtNumsPromise).then(court => setCourtsNumbers(court));

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