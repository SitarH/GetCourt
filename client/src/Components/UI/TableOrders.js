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

function Row(props) {
  const { item } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
            onClick={() => setOpen(!open)}
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
    </React.Fragment>
  );
}


export default function CollapsibleTable() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchUsers()

  }, [])

  const fetchUsers = async () => {

    try {
      const response = await fetch(`${apiAdress}/api/GetCourt/user/gameOrders`);
      const data = await response.json();
      console.log(data)
      const games = data.map((item, index) => {
        return item.gamesList;
      })
      const games2 = games.map((item, index) => {
        return item[index];
      })
      console.log(games2)
      const gamesArr = games.map((game, index) => {
        return {
          id: index + 1,
          date: game.gamesList.date,
          time: game.time,
          location: game.location,
          court: game.court,

        }
      })
      console.log(games)
      setGames(gamesArr);
      // return data;
    } catch (e) {
      return e;
    }

  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Court</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game, index) => (
            <Row key={index} item={game} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
