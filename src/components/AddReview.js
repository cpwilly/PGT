import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from './Rating';
import ResidentsDropdown from './ResidentsDropdown';
import BathroomsDropdown from './BathroomsDropdown';
import Box from '@mui/material/Box';
import DataRequester from './DataRequester';
import DataType from './DataType';
import { Review } from '../models/index.js'

// number of residents
// number of bathrooms
// description
// rating

export default async function AddReview(props) {
  const [open, setOpen] = React.useState(false);
  const [residents, setResidents] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [rating, setRating] = React.useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setResidents('');
    setBathrooms('');
    setDescription('');
    setRating(-1);
  };

  const handleAdd = () => {

    // TODO: add form validation

    databaseSend();
    handleClose();
  }

    const databaseSend = async () => {
    let requester = new DataRequester();
    let jsonUserReviews = await requester.getData(DataType.Reviews, props.email);
    const isSameDorm = (element) => element.dormName == props.dormName;

    if(jsonUserReviews.length < 3 && !jsonUserReviews.some(isSameDorm)){
      requester.postData(DataType.Review, new Review({
        //Unsure if this is the correct JSON object
        "dormName": props.dormName,
        "date": new Date(),
        "wouldRoomAgain": true,
        "numResidents": residents,
        "numBathrooms": bathrooms,
        "description": description,
        "rating": rating,
        "numLikes": 0,
        "userEmail": props.email
      })
    );
  
      let dorm = await requester.getData(DataType.Dorm, props.dormName);
      await requester.addRating(DataType.Dorm, dorm, rating);
    }
  }

  const handleResidentsChange = (newValue) => {
    setResidents(newValue);
  }

  const handleBathroomsChange = (newValue) => {
    setBathrooms(newValue);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleRatingsChange = (newValue) => {
    setRating(newValue);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
        fullWidth='true'
      >
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <ResidentsDropdown handleResidentsChange={handleResidentsChange}/>
          </Box>
          <Box sx={{ mt: 2 }}>
            <BathroomsDropdown handleBathroomsChange={handleBathroomsChange}/>
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="description"
            fullWidth
            multiline
            variant="standard"
            value={description}
            onChange={e => handleDescriptionChange(e)}
          />
          <Rating handleRatingsChange={handleRatingsChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
