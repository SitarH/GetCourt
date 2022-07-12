import React from 'react';
import { useState } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
//import { useNavigate } from 'react-router-dom'

function Register() {
  //const navigate = useNavigate();
  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [bDate, SetBDate] = useState('');
  const [level, SetLevel] = useState('');
  const registerUserToDataBase = async(event) => {
    event.preventDefault();
    console.log('added to db');
  }

  return (
    <>
      <form>
        <h1>Registration</h1>
        <input value={firstName} placeholder="First Name"
          onChange={(event) => SetFirstName(event.target.value)}
          type="text" id="fname" name="fname" maxLength="10" required /><br />

        <input value={lastName} placeholder="Last Name"
          onChange={(event) => SetLastName(event.target.value)}
          type="text" id="lname" name="lname" maxLength="15" required /><br />

        <input value={email} placeholder="E-mail"
          onChange={(event) => SetEmail(event.target.value)}
          type="email" id="email" name="email" required /><br />

        <input value={password} placeholder="Password"
          onChange={(event) => SetPassword(event.target.value)}
          type="password" id="password" name="password" /*pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,12}"*/ required /><br />

        <input value={bDate} onChange={(event) => SetBDate(event.target.value)}
          type="date" id="date" name="date" max="2004-01-01" min="1902-01-01" required /><br />

        <input value={level} placeholder="Level"
          onChange={(event) => SetLevel(event.target.value)}
          type="text" id="level" name="level" maxLength="60" required /><br />

        <button onClick={registerUserToDataBase}> <IoMdPersonAdd/> Sign Up</button>

      </form>
    </>
  )
}

export default Register