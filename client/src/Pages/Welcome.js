import React from 'react';
import Card from '../Components/UI/Card';
import Wrapper from '../Components/UI/Wrapper';
import Title from '../Components/UI/Title';
import {useNavigate} from 'react-router-dom'

function Welcome() {

    const navigate = useNavigate();

  return (
   <Wrapper>
   <Card height={'200px'} onClick={()=>navigate('/login')}><Title>Login</Title></Card>
   <Card height={'200px'} onClick={()=>navigate('/register')}><Title>Register</Title></Card>
   </Wrapper>
  )
}

export default Welcome