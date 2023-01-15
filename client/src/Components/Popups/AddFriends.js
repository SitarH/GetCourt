import React from 'react';
import Button from '../UI/Button';
import PopUp from '../UI/PopUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FriendsList from './FriendsList';
import { useDispatch } from 'react-redux';
import { gameOrderActions } from '../../store/gameOrder';
import Title from '../UI/Title'
import Wrapper from '../UI/Wrapper'

function AddFriends({ toggleVal, setToggle, gameObj }) {

  const [toggleList, setToggleList] = useState(false);

  const navigate = useNavigate();

  const AddFriendHandler = (event) => {

    if (event.target.outerText === 'Yes') {
      setToggleList(!toggleList);


    }
    else {

      setToggle(!toggleVal);
      navigate('/checkout', { state: { gameOrder: gameObj } });
    }



  }

  return (
    <>
      {toggleList ? <FriendsList
        toggleVal={toggleVal}
        setToggle={setToggle}
        gameObj={gameObj}>
      </FriendsList> :
        <Wrapper style={{zIndex: '1'}}>
          <PopUp>
            <Title size={'20px'}>would you like to invite friends?</Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button value={"yes"} width={'150px'} padding={'3px'}
                onClick={AddFriendHandler}>Yes
              </Button>
              <br></br>
              <Button value={"no"} width={'150px'} padding={'3px'}
                onClick={AddFriendHandler}>No
              </Button>
            </div>
          </PopUp>
        </Wrapper>}
    </>

  )
}

export default AddFriends;