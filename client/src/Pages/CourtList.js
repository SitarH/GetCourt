import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../store/gameOrder';
import Court from '../Pages/Court';
import PurchaseButton from '../Components/UI/PurchaseButton';


function Courts() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const dispatch = useDispatch();

  const { location } = state;


  const [gameOrder, setGameOrder] = useState(state.gameOrder)
  console.log(location.court);
  console.log(gameOrder);

  const [courtsNumbers, setCourtsNumbers] = useState([])

  useEffect(() => {
    // dispatch(gameOrderActions.InsertIntoValue({ field: 'location', value: location.state.value.beachName }))
    // if (courts?.length > 0)
      setGameOrder({...gameOrder, location: location.beachName})
      fetchCourts()

  }, [])

  const fetchCourts = async () => {

    const respone = await fetch(`http://localhost:5008/api/GetCourt/court/arr/${location.court.join()}`)
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
  }


  const PurchaseHandler = () =>{
    dispatch(gameOrderActions.AddNewGame(gameOrder));
    navigate('/checkout')

  }

  return (
    <Wrapper className="column">
      <input type="date"
        min={disablePastDate()}
        onChange={(event) => setGameOrder({ ...gameOrder, date: event.target.value })}
      ></input>
      {gameOrder.date !== '' &&
        <div className="wrap">
          {courtsNumbers.map((courtNumber, index) => {
            return <Card height={'200px'} key={index}>

              <Court courtObj={courtNumber}
                game={gameOrder}
                setGame={setGameOrder} />

            </Card>
          })}
        </div>}
          <PurchaseButton onClick={PurchaseHandler}>Book a Game</PurchaseButton>

    </Wrapper>

  )
}

export default Courts