import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
import Title from '../Components/UI/Title'
import Wrapper from '../Components/UI/Wrapper'

function Friends() {

  return (
    <>
      <Title>Friends list</Title>
      <FriendsList/>
    </>
  )
}

export default Friends