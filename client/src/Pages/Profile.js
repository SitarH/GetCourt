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
    <>
      <Wrapper className="column">

        
        <Card>
        <Title>Profile</Title>
          <p>First Name: {currentUser.firstName}</p>
          <p>Last Name: {currentUser.lastName} </p>
          <p>Phone Number: {currentUser.phoneNumber} </p>
          <p>Password: {currentUser.password} </p>
          <p>Birth Date: {currentUser.dateOfBirth}</p>
          <p>Level: {currentUser.level} </p>
          </Card>
        <Button onClick={() => {
          setToggleEdit(prev => !prev);

        }}>Edit </Button>
        </Wrapper>

      {toggleEdit && <EditProfile />}

    </>
  )
}

export default Profile