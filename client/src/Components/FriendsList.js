import React from 'react';
import { useEffect, useState } from 'react';
import Wrapper from '../Components/UI/Wrapper';
import Friends from '../Pages/Friends';

function FriendsList() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetchFriends();

    }, [])


    const fetchFriends = async () => {

        // try {
        //     const response = await fetch(
        //         'http://localhost:5008/api/GetCourt/user/',
        //         // {
        //         //   method: 'GET',
        //         //   headers: {
        //         //     'Content-Type': 'application/json'
        //         //   }
        //         // }
        //     );

        //     console.log(response)
        //     if (response.ok) {
        //         const data = await response.json();
        //         setFriends(data)
        //     }
        // } catch (error) {
        //     console.log(error)

        // }
    }

    return (
        <Wrapper>
            {friends.map((friends) => {
                return <Friends
                    key={friends._id}
                    friends={friends}
                />
            })}
        </Wrapper>
    )
}

export default FriendsList