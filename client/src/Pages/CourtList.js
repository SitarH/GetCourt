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
import { apiAdress } from '../api';
import Button from '../Components/UI/Button';
import AddFriends from '../Components/Popups/AddFriends';
import courtImg from '../Asset/Images/court.png'

function Courts() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const { location } = state;

  const [gameOrder, setGameOrder] = useState(state.gameOrder)
  const [takenCourtsByHour, setTakenCourtsByHour] = useState([])
  const [courtObject, setCourtObject] = useState([])

  const [togglePopUp, setTogglePopUp] = useState(false);

  useEffect(() => {
    // dispatch(gameOrderActions.InsertIntoValue({ field: 'location', value: location.state.value.beachName }))
    // if (courts?.length > 0)
    setGameOrder({ ...gameOrder, location: location.beachName })
    fetchCourts()

  }, [])

  const fetchCourts = async () => {

    const respone = await fetch(`${apiAdress}/api/GetCourt/court/arr/${location.court.join()}`)
    const data = await respone.json();
    console.log(data[0].gameType)
    setCourtObject(data)

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
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  const DateHandler = (event) => {
    const date = event.target.value;
    const dateFormat = date.replace(/T.*/, '').split('-').reverse().join('-');
    setGameOrder({ ...gameOrder, date: dateFormat })
  }

  const timeHandler = (event) => {
    setGameOrder({ ...gameOrder, time: event.target.value });
    FetchCourts();
  }

  const FetchCourts = async () => {
    const Details = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location: gameOrder.location, date: gameOrder.date, time: gameOrder.time })
    };
    try {
      const response = await fetch(`${apiAdress}/api/GetCourt/location/availableHours`, Details);
      const data = await response.json();
      console.log(data)
      setTakenCourtsByHour(data);
      // return data;
    } catch (e) {
      return e;
    }

  }

  const PurchaseHandler = () => {
    dispatch(gameOrderActions.AddNewGame(gameOrder));
    navigate('/checkout')

  }

  return (
    <Wrapper className="column">
      <Title>When do you want to play?</Title>
      <input type="date"
        min={disablePastDate()}
        onChange={(event) => DateHandler(event)}
      ></input>
      {gameOrder.date !== '' &&
        <>
          <Title>What time?</Title>
          <select onChange={(event) => timeHandler(event)}>
          <option value={"disable"} selected hidden>Choose time</option>
            {courtObject[0].availableHours.map((item) => {
              return <option value={item.hour}>{item.hour}</option>
            })}
          </select>
        </>}

      {gameOrder.time !== '' && <>
        <Title>Playing for?</Title>
        <div>
          {
            courtObject[0].gameType.map((option, index) => {
              return <Button
                onClick={() => { setGameOrder({ ...gameOrder, type: option }) }} width={'90px'} padding={'3px'}>
                {option}
              </Button>
            })
          }
       </div>
      </>}


      {gameOrder.type !== '' && <>
        <Title>Choose court</Title>
        {courtObject.map((court, index) => {
          return takenCourtsByHour.includes(court.courtId) ? <Button className='disabled' disabled={true} width={'90px'} padding={'3px'}>{court.courtId}</Button> :
            // <Button onClick={() => { setGameOrder({ ...gameOrder, court: court.courtId }); setTogglePopUp(true) }} width={'90px'} padding={'3px'}>{court.courtId}</Button>
            <img src={courtImg} style={{height:'80px'}}></img>
        })}
      </>}

      {togglePopUp &&
        <AddFriends
          toggleVal={togglePopUp}
          setToggle={setTogglePopUp}
          gameObj={gameOrder} />}

      {gameOrder.court !== '' &&
        <div className="wrap">
{/* 
          {courtsNumbers.map((courtNumber, index) => {
            return <Card height={'200px'} key={index}>
              <Button onClick={() => setGameOrder({ ...gameOrder, court: courtNumber.courtId })} className={courtNumber.courtId === gameOrder.court && 'clicked'}>Court {courtNumber.courtId}</Button>

              <p>Playing for?</p>
              <div className="rowDirection">
                {courtNumber.gameType.map((gameType, index) => {
                  return <Button className={gameOrder.type === gameType && 'clicked'} width={'90px'} padding={'3px'}
                    key={index}
                    onClick={() => setGameOrder({ ...gameOrder, type: gameType })}>
                    {gameType}
                  </Button>
                }
                )}
              </div>


              <Court courtObj={courtNumber}
                game={gameOrder}
                setGame={setGameOrder} />
            </Card>
          })} */}
          {/* <PurchaseButton onClick={PurchaseHandler}>Book a Game</PurchaseButton>  */}
        </div>}


    </Wrapper>

  )
}

export default Courts