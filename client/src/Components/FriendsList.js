import React from 'react';
import { useEffect, useState } from 'react';
import Wrapper from '../Components/UI/Wrapper';
import { useSelector } from 'react-redux';

function FriendsList() {

    const [friends, SetFriends] = useState([]);
    const user = useSelector(state => state.auth.loggedUser);

    const GetUserFriends = async () => {
        let bodyContent = JSON.stringify({
            "phoneNum": user.phoneNumber
        });

        let response = await fetch("http://localhost:5008/api/GetCourt/user/friends", {
            method: "POST",
            body: bodyContent,
            headers: { "Content-Type": "application/json" }
        });

        let data = await response.text();
        console.log(data);
        SetFriends(data)
    }

    useEffect(() => {
        GetUserFriends()
      }, []);

    return (
        <Wrapper>
            {friends.map((friend) => {
                return <h2
                    key={friend.friendsInfo._id}
                >
                    {friend.friendsInfo.firstName} {friend.friendsInfo.lastName}
                </h2>
            })}
        </Wrapper>
    )
}

export default FriendsList