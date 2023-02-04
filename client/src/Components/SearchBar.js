import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { apiAddress } from '../api';
import PurchaseButton from '../Components/UI/PurchaseButton'

export default function Tags() {

  const [users, setUsers] = useState([])

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

  const AddFriendHandler = (friend) => {
    console.log(friend)


  }

  return (
    <>
      <Stack spacing={3} sx={{ width: 280 }}>

        <Autocomplete style={{ border: '1.5px solid', borderRadius: '10px', marginBottom: '20px' }}
          multiple
          id="tags-outlined"
          options={users}
          getOptionLabel={(user) => user.firstName + ' ' + user.lastName}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder="Search"
            />
          )}
        />

      <PurchaseButton valid={'pointer'} width='70px' onClick={(user)=>AddFriendHandler(user)}>Add</PurchaseButton>
      </Stack>
    </>
  );
}
