import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
import Title from '../Components/UI/Title'
import Button from '../Components/UI/Button'
import Wrapper from '../Components/UI/Wrapper';
import SearchBar from '../Components/SearchBar';

function Friends() {




  return (
    <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-around'}}>
      <div>
       <Title>Friends list</Title>
       <FriendsList/> 
      </div>
      <div>
      <Title>Add friend to list</Title>
      <SearchBar/>
      <Button width='100px'>Add</Button>
      </div>
    </div>
  )
}

export default Friends