import React from 'react';
import Profile from '../Components/Profile';
import PlayerContext from '../Context/PlayerContext';
import {useContext} from 'react';

function ProfilePage() {

  const {currentUser} = useContext(PlayerContext);
  return (
   
    <Profile data={currentUser}></Profile>
  )
}

export default ProfilePage