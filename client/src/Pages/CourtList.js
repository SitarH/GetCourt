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
import { apiAddress } from '../api';
import Button from '../Components/UI/Button';
import AddFriends from '../Components/Popups/AddFriends';
import courtImg1 from '../Asset/Images/court1.png';
import courtImg2 from '../Asset/Images/court2.png';
import courtImg3 from '../Asset/Images/court3.png';
import courtImg4 from '../Asset/Images/court4.png';

function Courts() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const { location } = state;

  const [gameOrder, setGameOrder] = useState(state.gameOrder)
  const [takenCourtsByHour, setTakenCourtsByHour] = useState([])
  const [courtObject, setCourtObject] = useState([])
  const imgArr = [courtImg1, courtImg2, courtImg3, courtImg4]

  const [togglePopUp, setTogglePopUp] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);

  const currentTime = parseInt(new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  }).split(':')[0])

  useEffect(() => {

    setGameOrder({ ...gameOrder, location: location.beachName })
    fetchCourts()

  }, [])

  const fetchCourts = async () => {

    const response = await fetch(`${apiAddress}/api/GetCourt/court/arr/${location.court.join()}`)
    const data = await response.json();

    setCourtObject(data)

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
    setIsActive(true);
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
      const response = await fetch(`${apiAddress}/api/GetCourt/location/availableHours`, Details);
      const data = await response.json();
      console.log(data)

        (data);
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Wrapper direction={isActive ? 'row' : 'column'}>

        {courtObject.length > 0 ?
          <>
            <Title size={isActive ? '25px' : '35px'}>When do you want to play?</Title>
            <input type="date" width={isActive ? '150px' : '350px'}
              min={disablePastDate()}
              onChange={(event) => DateHandler(event)}
            ></input>
          </> : null}

        {gameOrder.date !== '' &&
          <>
            <Title size={isActive ? '25px' : '35px'} >What time?</Title>
            <select onChange={(event) => timeHandler(event)} width={isActive ? '150px' : '350px'}>
              <option value={"disable"} selected hidden>Choose time</option>
              {courtObject[0].availableHours.map((item) => {
                {
                  return parseInt(item.hour.split(':')[0]) < currentTime ?
                    <option disabled>{item.hour}</option> :
                    <option value={item.hour}>{item.hour}</option>
                }

              })}
            </select>
          </>}
      </Wrapper>

      <Wrapper direction={isActiveTwo ? 'row' : 'column'} style={{ justifyContent: 'unset' }}>
        {gameOrder.time !== '' && <>
          <Title size={isActiveTwo ? '25px' : '35px'} style={{ marginRight: '10px' }}>Playing for?</Title>
          <div>
            {
              courtObject[0].gameType.map((option, index) => {
                return <Button className={gameOrder.type === option && 'clicked'}
                  onClick={() => { setGameOrder({ ...gameOrder, type: option }); setIsActiveTwo(true) }} width={'100px'} padding={'10px'}>
                  {option}
                </Button>
              })
            }
          </div>
        </>}
      </Wrapper>

      <Wrapper direction={'column'}>
        {gameOrder.type !== '' && <>
          <Title>Choose court</Title>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {courtObject.map((court, index) => {
              return takenCourtsByHour.includes(court.courtId) ?
                <Button className='disabled' disabled={true} width={'90px'} padding={'3px'}>{court.courtId}</Button> :
                // <img src={courtImg1}
                //   style={{ height: '80px', cursor: 'pointer' }}
                //   onClick={() => { setGameOrder({ ...gameOrder, court: court.courtId }); setTogglePopUp(true) }}></img>
                <Button width={'90px'} padding={'3px'}
                onClick={() => { setGameOrder({ ...gameOrder, court: court.courtId }); setTogglePopUp(true) }}>{court.courtId}</Button>
            })}
          </div>
        </>}
      </Wrapper>

      {togglePopUp &&
        <AddFriends
          toggleVal={togglePopUp}
          setToggle={setTogglePopUp}
          gameObj={gameOrder} />}

    </div>


  )
}

export default Courts