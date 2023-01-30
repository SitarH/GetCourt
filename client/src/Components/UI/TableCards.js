import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import Title from './Title';

const columns = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'number',
    headerName: 'Number',
    width: 100,
    editable: true,
  },
  {
    field: 'expirationDate',
    headerName: 'Expiration date',
    width: 120,
  }

];

export default function DataTable() {

  const currentUserPayments = useSelector(state => state.auth.loggedUser.payments);
  let cards;
  if (currentUserPayments != undefined) {
     cards = currentUserPayments.map((card, index) => {
      return {
        id: index + 1,
        number: card.enteredCreditCard,
        expirationDate: card.enteredExpirationDate,
      }
    })
  }


  return (
    <div style={{
      height: 250,
      width: '350px',
      backgroundColor: '#F2C67D',
      borderRadius: '10px'
    }}>
      {currentUserPayments != undefined ?
      <DataGrid
        rows={cards}
        columns={columns}
        pageSize={5}
        checkboxSelection

      />: <h2>No saved cards yet..</h2>}
    </div>
  );
}