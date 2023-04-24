import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Box, CardContent, Typography } from '@mui/material';

export default function Review(props) {
  function formatDate(date) {
    let formatted = "";
    let i = 0;
    while (date.charAt(i) === '-' || (date.charAt(i) >= '0' && date.charAt(i) <= '9')) {
      formatted = formatted + date.charAt(i++);
    }
    return formatted;
  }
  return (
    <Card sx={{ maxWidth: 800 }}>
      <Grid container>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <div>
            {formatDate(props.date)}
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          Number of Residents: {props.numResidents}
        </Grid>
        <Grid item xs={4}>
          Number of Bathrooms: {props.numBathrooms}
        </Grid>
        <Grid xs={3}>
          <Grid container>
            <Grid xs={2}></Grid>
            <Box sx={{
              width: 60,
              height: 60,
              backgroundColor: '#83BD7E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Typography variant="h4" sx={{
                color: 'black',
              }}>
                {props.rating}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography variant="body1">
              {props.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>&nbsp;</Grid>
        <Grid xs={1}>&nbsp;</Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </Card>
  );
}