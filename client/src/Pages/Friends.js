import React from 'react';
import { useEffect, useState } from 'react';
import FriendsList from '../Components/Popups/FriendsList';
 

function Friends() {

  const [products, setProducts] = useState([])

  useEffect(() => {
     fetchFriends();

  }, [])


  const fetchFriends = async () => {

    try {
      const response = await fetch(
        'http://localhost:5008/api/GetCourt/user',
        // {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }
      );
      // const respone = await fetch('http://localhost:5008/api/GetCourt/user');
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setProducts(data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <FriendsList/>
  )
}

export default Friends