import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';


function SavedCards() {

  const currentUser = useSelector(state => state.auth.loggedUser)

  return (
    <>
    <Wrapper className="column">
      <Card>
        <Title>Saved Cards </Title>

        <p>Card Number: {currentUser.cardNumber}</p>
      </Card>
    </Wrapper>

    </>
  )
}

export default SavedCards