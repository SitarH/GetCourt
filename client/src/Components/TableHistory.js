import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: true,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 100,

  },
  {
    field: 'location',
    headerName: 'Location',
    width: 100,

  },
  {
    field: 'court',
    headerName: 'Court',
    width: 100,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'players',
    headerName: 'Players',
    width: 100,
  },

];


export default function DataTable() {

  const userGames = useSelector(state => state.auth.loggedUser.gamesList);


  const games = userGames.map((game, index) => {
    return {
      id: index + 1,
      date: game.date,
      time: game.time,
      location: game.location,
      court: game.court,
      type: game.type,
      players: game.players,
    }
  })


  return (
    <div style={{ height: 300, width: '80%', backgroundColor: '#F2C67D', borderRadius: '10px' }}>
      <DataGrid
        rows={games}
        columns={columns}
        pageSize={5}

      />
    </div>
  );
}