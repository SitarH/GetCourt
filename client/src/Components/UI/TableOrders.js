import * as React from 'react';
import { useEffect, useState } from 'react';
import { apiAddress } from '../../api';
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
  const { item, key } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell align="right">{1}</TableCell>
        <TableCell component="th" scope="row">
          {item.date}
        </TableCell>
        <TableCell align="left">{item.time}</TableCell>
        <TableCell align="left">{item.location}</TableCell>
        <TableCell align="left">{item.court}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            
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
      const response = await fetch(`${apiAddress}/api/GetCourt/user/gameOrders`);
      const data = await response.json();
      setGames(data)
      // console.log('?',data)
      // const games = data.map((item, index) => {
      //   return item.gamesList;
      // })
      // const games2 = games.map((item, index) => {
      //   return item[index];
      // })
      // console.log(games2)
      // const gamesArr = games.map((game, index) => {
      //   return {
      //     id: index + 1,
      //     date: game.gamesList.date,
      //     time: game.time,
      //     location: game.location,
      //     court: game.court,

      //   }
      // })
      // console.log(games)
      // setGames(gamesArr);
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
          <TableCell align="left"></TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Court</TableCell>
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
