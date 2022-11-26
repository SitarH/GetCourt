import React from 'react';
import Wrapper from '../Components/UI/Wrapper';
import { useState, useEffect } from 'react';
import EditProfile from '../Components/Forms/EditProfile';
import { useSelector } from 'react-redux';
import Button from '../Components/UI/Button';
import Title from '../Components/UI/Title';
import Card from '../Components/UI/Card';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import CakeIcon from '@mui/icons-material/Cake';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

function Profile() {

  const [toggleEdit, setToggleEdit] = useState(false);

  const currentUser = useSelector(state => state.auth.loggedUser)

  return (
    <Wrapper direction={'row'}>
      <Card backgroundColor={'#F2C67D'}
        width={'350px'}
        height={'350px'}
        direction={'column'}>
         <Title>{currentUser.firstName} {currentUser.lastName}</Title>
         <div style={{display:"flex",flexDirection:"row", alignItems: 'center', marginBottom: '15px' }}>
         <LocalPhoneRoundedIcon/><h2>{currentUser.phoneNumber}</h2>
         </div>
         <div style={{display:"flex",flexDirection:"row", alignItems: 'center', marginBottom: '15px'}}>
         <CakeIcon color="#4EB69F"/><h2>{currentUser.dateOfBirth}</h2>
         </div>
         <div style={{display:"flex",flexDirection:"row", alignItems: 'center', marginBottom: '15px'}}>
         <SportsVolleyballIcon/><h2>{currentUser.level} </h2>
         </div> 
      </Card>
     <EditProfile id={currentUser._id} />

    </Wrapper>
  )
}

export default Profile