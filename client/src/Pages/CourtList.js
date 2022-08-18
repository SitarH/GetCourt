import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import {useDispatch} from 'react-redux';
import {gameOrderActions} from '../store/gameOrder';
import Court from '../Pages/Court'


function Courts() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [courts, setCourts] = useState(location.state.value.court)
  console.log(courts)
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

  

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

  return (
    <Wrapper className="column">
    <input type="date"
    id= "date" 
    min= {disablePastDate()}
    
    ></input>
    
      <div className="wrap">
      {courtsNumbers.map((courtNumber, index) => {
        return <Card height={'200px'}
          key={index}
          onClick={() => navigate('/court', { state: { value: courtNumber } })}
        >
          <Court courtObj={courtNumber}/>
        </Card>
      })}
      </div>
      
    </Wrapper>
   
  )
}

export default Courts