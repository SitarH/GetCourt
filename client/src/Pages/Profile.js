import React from 'react';
import Wrapper from '../Components/UI/Wrapper';
import PurchseButton from '../Components/UI/PurchaseButton';
import { useState, useEffect } from 'react';
import EditProfile from '../Components/Forms/EditProfile';
import { useSelector } from 'react-redux';
import Button from '../Components/UI/Button';
import Title from '../Components/UI/Title';
import Card from '../Components/UI/Card';

function Profile() {

  const [toggleEdit, setToggleEdit] = useState(false);

  const currentUser = useSelector(state => state.auth.loggedUser)

  return (
    <Wrapper>
        <Card backgroundColor={'#F2C67D'} width={'350px'} height={'350px'} direction={'column'}>
        <Title>Profile</Title>
          <h2>First Name: {currentUser.firstName}</h2>
          <h2>Last Name: {currentUser.lastName} </h2>
          <h2>Phone Number: {currentUser.phoneNumber} </h2>
          <h2>Birth Date: {currentUser.dateOfBirth}</h2>
          <h2>Level: {currentUser.level} </h2>
          <PurchseButton width={'100px'} valid={'pointer'} size={'15px'} onClick={() => {
          setToggleEdit(prev => !prev);

        }}>Edit </PurchseButton>
          </Card>


      {toggleEdit && <EditProfile />}

    </Wrapper>
  )
}

export default Profile