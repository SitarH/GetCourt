import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
import Title from '../Components/UI/Title'
import Card from '../Components/UI/Card';
import SearchBar from '../Components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {apiAddress} from '../api';

function Friends() {

  const userFriendsList = useSelector(state => state.auth.loggedUser.friendsList);

  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {

    mapFriends();

  }, [])

const mapFriends = async () => {

  const friends = await Promise.all(userFriendsList.map(async (item) => {

    try {
      const respone = await fetch(`${apiAddress}/api/GetCourt/user/${item}`);
      if (respone.status === 200) {
        const data = await respone.json();
        return data;
      }
    } catch (error) {
      console.log(error)
    }
  }

  ))
  
  setFriendsList(friends);
}

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-50px' }}>Friends list</Title>
        {friendsList.length > 0 ? 
        <>
        {friendsList.map((friend, index)=>{
          return <><h3>{index+1}- {friend.firstName} {friend.lastName}</h3><br/></>

        })}
        </>
        
        
        
        : <h2>No friends in list</h2>}
        
      </Card>
      <Card height={'350px'} width={'350px'} direction={'column'} backgroundColor={'#F2C67D'}>
        <Title style={{ marginTop: '-120px' }}>Add friends to list</Title>
        <SearchBar />
      </Card>
    </div>
  )
}

export default Friends;