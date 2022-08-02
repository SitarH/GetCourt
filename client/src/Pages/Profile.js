import React from 'react';
import Wrapper from '../Components/UI/Wrapper';
import PurchseButton from '../Components/UI/PurchaseButton';
import { useState, useEffect } from 'react';
import EditProfile from '../Components/Forms/EditProfile';

function Profile() {

  const [profile, setProfile] = useState(null);
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {

    try {
      const respone = await fetch('http://localhost:5008/api/GetCourt/user/62b1b8d25ac79c104dcfcbae');
      if (respone.status === 200) {
        const data = await respone.json();
        //onsole.log(data)
        setProfile(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Wrapper>
        <h1>Profile</h1>
      </Wrapper>
      <Wrapper>
        {
          profile != null ?
            <div key={profile.id} >
              First Name: {profile.firstName}<br />
              Last Name: {profile.lastName} <br />
              Email: {profile.email} <br />
              Password: {profile.password} <br />
              Birth Date: {profile.dateOfBirth} <br />
              Level: {profile.level} <br />
            </div>
            : <p>user not found</p>
        }
      </Wrapper>
      <br />
      <Wrapper><PurchseButton onClick={() => {
        setToggleEdit(prev=>!prev);
        
      }}>Edit </PurchseButton></Wrapper>
      
      {toggleEdit ? <EditProfile/> : null }
    </>
  )
}

export default Profile