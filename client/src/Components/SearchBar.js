import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { apiAddress } from '../api';
import PurchaseButton from '../Components/UI/PurchaseButton';
import { useDispatch, useSelector } from 'react-redux';

export default function Tags() {

  const [users, setUsers] = useState([])

  const [friend, setFriend] = useState('')

  const UserId = useSelector(state => state.auth.loggedUser._id)

  const User = useSelector(state => state.auth.loggedUser)

  useEffect(() => {
    fetchUsers();
  }, [])


  const fetchUsers = async () => {
    try {
      const respone = await fetch(`${apiAddress}/api/GetCourt/user`);
      if (respone.status === 200) {
        const data = await respone.json();
        setUsers(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const findFriend = async (friend) => {
    try {
      const response = await fetch(`${apiAddress}/api/GetCourt/user/${friend}`);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error)
    }

  }

  const AddFriend = async (friendUser) => {
    console.log(friendUser)
    const friendDetails = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(friendUser)
    };
    try {
      const response = await fetch(`${apiAddress}/api/GetCourt/user/AddFriend/${UserId}`, friendDetails);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (e) {
      return e;
    }

  }

  const AddFriendHandler = async() => {
    const friendUser = await findFriend(friend);
    console.log(friendUser)
    AddFriend(friendUser);

  }

  return (
    <>
      <Stack spacing={3} sx={{ width: 280 }}>

        <select onChange={(event) => { setFriend(event.target.value) }}>
          {
            users.map((item, index) =>
           
              <option key={index} value={item._id}>{item.firstName} {item.lastName}</option>
            )
          }
        </select>

        <PurchaseButton valid={'pointer'} width='70px' onClick={AddFriendHandler}>Add</PurchaseButton>
      </Stack>
    </>
  );
}
