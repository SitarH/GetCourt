import React from 'react';
import Button from '../UI/Button';
import PopUp from '../UI/PopUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FriendsList from './FriendsList';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../../store/gameOrder';

function AddFriends({ toggleVal, setToggle, gameObj }) {

  const [toggleList, setToggleList] = useState(false);
 
  const navigate = useNavigate();

  const AddFriendHandler = (event) => {
    
    if (event.target.outerText === 'Yes') {
      setToggleList(!toggleList);
     

    }
    else {
      
      setToggle(!toggleVal);
      navigate('/checkout', { state: {gameOrder: gameObj}});
    }

  

  }

  return (
    <>
      {toggleList ? <FriendsList
        toggleVal={toggleVal}
        setToggle={setToggle}
        gameObj = {gameObj}>
      </FriendsList> :
        <PopUp>
          <h2>would you like to invite friends?</h2>
          <Button value={"yes"} width={'150px'}
            onClick={AddFriendHandler}>Yes
          </Button>
          <Button value={"no"} width={'150px'}
            onClick={AddFriendHandler}>No
          </Button>
        </PopUp>}
    </>

  )
}

export default AddFriends;