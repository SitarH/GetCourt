import React from 'react';
import Card from '../UI/Card';
import Title from '../UI/Title';
import Wrapper from '../UI/Wrapper';



function Admin() {
  return (
    <>
    <Title>Welcome, Admin</Title>
    <Wrapper>
    <Card height={'400px'}>
      <h2>Orders</h2>
    </Card>
    <Card height={'400px'}>
      <h2>Messages</h2>
    </Card>
    </Wrapper>
    </>
  )
}

export default Admin