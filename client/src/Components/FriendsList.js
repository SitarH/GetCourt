import React from 'react';
import { useEffect, useState } from 'react';
import Wrapper from '../Components/UI/Wrapper';
import { useSelector } from 'react-redux';
import { apiAdress } from '../api';

function FriendsList() {

    const [friends, SetFriends] = useState([]);
    const user = useSelector(state => state.auth.loggedUser);

    // const GetUserFriends = async () => {
    //     // let bodyContent = JSON.stringify({
    //     //     "phoneNum": user.phoneNumber
    //     // });

<<<<<<< HEAD
    //     let response = await fetch("http://localhost:5008/api/GetCourt/user/friends", {
    //         method: "POST",
    //         body: bodyContent,
    //         headers: { "Content-Type": "application/json" }
    //     });
=======
        let response = await fetch(`${apiAdress}/api/GetCourt/user/friends`, {
            method: "POST",
            body: bodyContent,
            headers: { "Content-Type": "application/json" }
        });
>>>>>>> 7d8e80754fa5f1de63744ae480a8248c86f9d220

    //     let data = await response.text();
    //     console.log(data);
    //     SetFriends(data)
    // }

    useEffect(() => {
        GetUserFriends();
    }, []);

    return (
        <Wrapper>
            {friends.map((friend, index) => {
                return <h2
                    key={index}
                >
                    {friend.friendsInfo.firstName} {friend.friendsInfo.lastName}
                </h2>
            })}
        </Wrapper>
    )
}

export default FriendsList