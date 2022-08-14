import React from 'react';
import { useSelector } from 'react-redux';
import Order from '../Components/Order';

function History() {

  const userGames = useSelector(state => state.auth.loggedUser.gamesList)





  return (
    <>
   {userGames.map((game, index) =>{
      return <Order key={index}>
      
      </Order>

    })
   }
   </>
  )
}

export default History