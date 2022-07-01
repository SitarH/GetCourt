import React from 'react';
import Button from '../UI/Button';

function AddFriends({toggleVal, setToggle}) {

  const AddFriendHandler = (event) =>{
    if(event === 'yes'){

    }
    else{
      setToggle(!toggleVal);
    }
  }

  return (
    <>
    <div>would you like to invite friends?</div>
    <Button value={'yes'} 
    onClick={(event)=>AddFriendHandler(event.target.value)}>Yes
    </Button>
    <Button value={'no'} 
    onClick={(event)=>AddFriendHandler(event.target.value)}>No
    </Button>
    </>
  )
}

export default AddFriends;