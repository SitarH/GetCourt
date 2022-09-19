import React from 'react';
import Card from '../UI/Card';
import Title from '../UI/Title';
import Wrapper from '../UI/Wrapper';
import Table from '../UI/Table';
import TableOrders from '../UI/TableOrders';
import {useEffect, useState} from 'react';
import {apiAdress} from '../../api'



function Admin() {

//   const [users, setUsers] = useState([]);
//   const [orders, setOrders] = useState([]);


//   useEffect(() => {
//     fetchUsers()

// }, [])

// const fetchUsers = async () => {

//     try {
//         const response = await fetch(`${apiAdress}/api/GetCourt/user/`);
//         const data = await response.json();
//         console.log(data)
//         setUsers(data);
//         // return data;
//     } catch (e) {
//         return e;
//     }

// }
  


  return (
    <>
    <Title>Welcome, Admin</Title>
    <Wrapper>
    <Card height={'400px'} width={'800px'}>
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