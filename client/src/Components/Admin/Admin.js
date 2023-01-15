import React from 'react';
import Card from '../UI/Card';
import Title from '../UI/Title';
import Wrapper from '../UI/Wrapper';
import Table from '../UI/Table';
import TableOrders from '../UI/TableOrders';
import {useEffect, useState} from 'react';
import {apiAddress} from '../../api'



function Admin() {


  return (
    <>
    <Wrapper>
    <Title>Welcome, Admin</Title>
    
    <Card height={'400px'} width={'800px'} >
      <h2>Active Users</h2>
      <Table />
    </Card>
    <Card height={'400px'} width={'800px'}>
      <h2>Orders</h2>
      <TableOrders/>
    </Card>
    </Wrapper>
    </>
  )
}

export default Admin