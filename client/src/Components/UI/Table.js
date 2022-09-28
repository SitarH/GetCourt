 import * as React from 'react';
 import { useEffect, useState } from 'react';
 import { apiAdress } from '../../api';
 import DeleteIcon from '@material-ui/icons/Delete';
 import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import EditUser from '../Admin/EditUser';

function Row(props) {
  const { item } = props;
  const [open, setOpen] = React.useState(false);

  const DeActivateUser = async(id)=>{
    const userDetails = {
      method: 'DELETE',
  };
  try {
      const response = await fetch(`${apiAdress}/api/GetCourt/user/${id}`, userDetails);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (e) {
      return e;
  }  
}

// const EditUser = async(id)=>{
//   const userDetails = {
//     method: 'PUT',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(id)
// };
// try {
//     const response = await fetch(`${apiAdress}/api/GetCourt/user/delete`, userDetails);
//     const data = await response.json();
//     console.log(data);
//     return data;
// } catch (e) {
//     return e;
// }  
// }

  
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell align="right">{item.index}</TableCell>
        <TableCell component="th" scope="row">
          {item.firstName + " " + item.lastName}
        </TableCell>
        <TableCell align="right">{item.phone}</TableCell>
        <TableCell align="right">{item.dob}</TableCell>
        <TableCell align="right">{item.level}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={()=> DeActivateUser(item.id)}
          >
             <DeleteIcon /> 
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
             <EditIcon /> 
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Edit User
              </Typography>
             
                 <EditUser id={'11'} user={item}/>
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()

  }, [users])

  const fetchUsers = async () => {

    try {
      const response = await fetch(`${apiAdress}/api/GetCourt/user/`);
      const data = await response.json();
      console.log(data)
      const users = data.map((user, index) => {
        return {
          id: user._id,
          index: index + 1,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phoneNumber,
          dob: user.dateOfBirth,
          level: user.level,
        }

      })
      setUsers(users);
      // return data;
    } catch (e) {
      return e;
    }

  }


  return (
    <TableContainer background-color="black" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Date of birth</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Row key={user.id} item={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
