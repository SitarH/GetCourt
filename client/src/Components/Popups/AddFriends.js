import React from 'react';
import Button from '../UI/Button';
import PopUp from '../UI/PopUp';
import { useState } from 'react';
import FriendsList from './FriendsList'

function AddFriends({ toggleVal, setToggle }) {

  const [toggleList, setToggleList] = useState(false);

  const AddFriendHandler = (event) => {

    if (event.target.outerText === 'Yes') {
      setToggleList(!toggleList);

    }
    else {
      setToggle(!toggleVal);
    }
  }

  return (
    <>
      {toggleList ? <FriendsList
        toggleVal={toggleVal}
        setToggle={setToggle}>
      </FriendsList> :
        <PopUp>
          <h2>would you like to invite friends?</h2>
          <Button value={"yes"}
            onClick={AddFriendHandler}>Yes
          </Button>
          <Button value={"no"}
            onClick={AddFriendHandler}>No
          </Button>
        </PopUp>}
    </>

  )
}

export default AddFriends;