import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Box, CardContent, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Review() {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <Grid container>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <div>
            Date
          </div>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid item xs={4}>
          Number of bathrooms: 70
        </Grid>
        <Grid item xs={2}>
          Kitchen: No
        </Grid>
        <Grid item xs={4}>
          In-unit Laundry: No
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
                5
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography variant="body1">
              Review text here...
            </Typography>
          </CardContent>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <ThumbUpOffAltIcon />
        </Grid>
        <Grid xs={1}>1</Grid>
        <Grid xs={1}>
          <ThumbDownOffAltIcon />
        </Grid>
        <Grid xs={1}>1</Grid>
      </Grid>
    </Card>
  );
}