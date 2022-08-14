import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';

function History() {

  const [games, SetGames] = useState([]);
  const order = useSelector(state => state.auth.loggedUser.gamesList);

  const GetAllGames = () => {
    console.log('order', order)
    SetGames(order)
  }

  useEffect(() => {
    GetAllGames()
  }, []);


  return (
    <>
      <Wrapper className="column">
        <Card>
          <Title>All Court Orders</Title>
          {
            games.map((game, index) => (
              Object.entries(game).map(([key, val]) => (
                <h2>{key}:{val}</h2>
              ))
            ))
          }

        </Card>
      </Wrapper>
    </>

  )
}

export default History