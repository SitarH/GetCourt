import React from 'react';
import Card from './UI/Card';
import Title from './UI/Title';
import Wrapper from './UI/Wrapper';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function Confirmation() {

  // const gameDate = useSelector(state => state.gameOrder.date);
  // const gameTime = useSelector(state => state.gameOrder.time);
  const gameDate = '8-10-2022'
  const gameTime = '16:00';
  console.log(gameDate, gameTime);
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;
  
  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  let stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  let endTime = new Date(`${gameDate.split('-')[2]}-${gameDate.split('-')[1]}-${gameDate.split('-')[0]}`) ; // use UNIX timestamp in seconds
  endTime.setHours(gameTime.split(':')[0])
  endTime.setMinutes(gameTime.split(':')[1])
  endTime/=1000;
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;


  return (
    <Wrapper direction={'column'}>

      <Title>YAY! Your game is about to start in...</Title>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <CountdownCircleTimer
        {...timerProps}
        colors="#F2C67D"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#4EB69F"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      </div>
    </Wrapper>
  )
}

export default Confirmation;