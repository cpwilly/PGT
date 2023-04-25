import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Box, CardContent, Typography } from '@mui/material';
import { Auth } from 'aws-amplify';
import { deleteReview } from './DataRequester';

export default function Review(props) {
  function formatDate(date) {
    let formatted = "";
    let year = "";
    let i = 0;
    while (i < 4)
      year = year + date.charAt(i++);
    i = 5;
    if (date.charAt(i) === '0')
      i++;
    while (date.charAt(i) === '-' || (date.charAt(i) >= '0' && date.charAt(i) <= '9'))
      formatted = formatted + date.charAt(i++);
    return formatted + "-" + year;
  }


  function boxColor(rating) {
    let color = '#83BD7E';
    if (rating === 3)
      color = '#f5bd4e';
    else if (rating === 2 || rating === 1)
      color = '#f56262';
    return color;
  }

  const [userInfo, setUserInfo] = React.useState({ attributes: { email: 'test@test.com' } });

  useEffect(() => {
    const fetchData = async () => {
      const info = await Auth.currentUserInfo();
      setUserInfo(info);
    }
    fetchData();

  }, [setUserInfo])


  function Delete({ email }) {
    if (email === userInfo.attributes.email)
      return <Button color='error' variant='contained' size='small' >Delete</Button>
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
              backgroundColor: boxColor(props.rating),
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
        <Grid xs={9}>&nbsp;</Grid>
        <Grid xs={2}><Delete email={props.email}/></Grid>
        <Grid xs={9}>&nbsp;</Grid>
      </Grid>
    </Card>
  );
}