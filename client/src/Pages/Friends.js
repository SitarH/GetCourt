import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
import Title from '../Components/UI/Title'
import Card from '../Components/UI/Card';
import SearchBar from '../Components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

function Friends() {

  const userFriendsList = useSelector(state => state.auth.loggedUser.friendsList);
console.log(userFriendsList);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-50px' }}>Friends list</Title>
        {userFriendsList.length > 0 ? <FriendsList /> : <h2>No friends in list</h2>}
        
      </Card>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-120px' }}>Add friends to list</Title>
        <SearchBar />
      </Card>
    </div>
  )
}

export default Friends;