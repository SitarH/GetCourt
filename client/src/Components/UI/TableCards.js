import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

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
    headerName: 'expiration',
    width: 100,
   
  }

];


export default function DataTable() {

    const currentUserPayments = useSelector(state => state.auth.loggedUser.payments);
    
    const cards = currentUserPayments.map((card, index) => {
        return {
          id: index + 1,
          number: card.enteredCreditCard,
          expirationDate: card.enteredExpirationDate,
     } })


  return (
    <div style={{ height: 250, width: '350px', backgroundColor:'#F2C67D', borderRadius: '10px' }}>
      <DataGrid
        rows={cards}
        columns={columns}
        pageSize={5}
       
      />
    </div>
  );
}