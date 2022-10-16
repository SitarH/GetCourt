import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
import Title from '../Components/UI/Title'
import Card from '../Components/UI/Card';
import SearchBar from '../Components/SearchBar';

function Friends() {



  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-50px' }}>Friends list</Title>
        <FriendsList />
      </Card>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-120px' }}>Add friends to list</Title>
        <SearchBar />
      </Card>
    </div>
  )
}

export default Friends;