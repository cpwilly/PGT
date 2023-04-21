import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Review from './review';

function createData(review) {
  return { review };
}

function addReviews(reviews){
  let rows = []

  for(let i = 0; i < reviews.length; i++){
    rows = [...rows, createData(<Review
                       date={reviews[i].date}
                       numResidents={reviews[i].numResidents}
                       numBathrooms={reviews[i].numBathrooms}
                       description={reviews[i].description}
                       rating={reviews[i].rating}
                       />)];
  }

  return rows;
}


export default function BasicTable(props) {
  const [rows, setRows] = React.useState(addReviews(props.reviews));

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.review}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.review}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
