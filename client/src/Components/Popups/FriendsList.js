import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import PopUp from '../UI/PopUp';
import Button from '../UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {gameOrderActions} from '../../store/gameOrder';



export default function CheckboxListSecondary({ toggleVal, setToggle }) {

  const userFriendsList = useSelector(state => state.auth.loggedUser.friendsList);

  console.log(userFriendsList)
  const dispatch = useDispatch();

  const [checked, setChecked] = useState([]);

  const [friendsList, setFriendsList] = useState([])


  useEffect(() => {

    // fetchFriendsList('62d1400d207bc314b4355c9b');
     mapFriends();
   
   
  }, [])

  const fetchFriendsList = async(id) =>{
    try {
      const respone = await fetch(`http://localhost:5008/api/GetCourt/user/${id}`);
      if(respone.status === 200){
        const data = await respone.json();
        console.log(data)
        setFriendsList(data.friendsList);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const mapFriends = async() =>{
    
    const friends = await Promise.all(userFriendsList.map(async (item)=>{
      console.log(item)
      try {
        const respone = await fetch(`http://localhost:5008/api/GetCourt/user/${item}`);
        if(respone.status === 200){
          const data = await respone.json();
          return data;
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    ))
      console.log(friends)
      setFriendsList(friends);
  }
  

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
   
  };


  const AddToGame = () => {
    console.log(checked)
    dispatch(gameOrderActions.InsertIntoValue({field: 'players', value: checked}));
    setToggle(!toggleVal);

  }


  return (
    <PopUp>
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {friendsList.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value._id}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.firstName + ' ' + value.lastName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    <Button onClick={AddToGame}>Add to game</Button>
    </PopUp>
  );
}