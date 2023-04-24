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
import { useEffect } from 'react';
import { getDorm, getReview, postReview, addRating } from './DataRequester'

// number of residents
// number of bathrooms
// description
// rating


/*dormName: props.dormName,
      date: new Date(),
      wouldRoomAgain: true,
      numResidents: residents,
      numBathrooms: bathrooms,
      description: description,
      rating: rating,
      numLikes: 0,
      userEmail: props.email */
function createRev(dormName, wouldRoomAgain, numResidents, numBathrooms, description, rating, numLikes, userEmail) {
  let rev = {
    dormName: dormName,
    date: new Date().toISOString(),
    wouldRoomAgain: wouldRoomAgain,
    numResidents: numResidents,
    numBathrooms: numBathrooms,
    description: description,
    rating: rating,
    numLikes: numLikes,
    userEmail: userEmail
  };

  return rev;
}

export default function AddReview(props) {
  const [open, setOpen] = React.useState(false);
  const [residents, setResidents] = React.useState(-1);
  const [bathrooms, setBathrooms] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [rating, setRating] = React.useState(-1);
  const [dbSend, setDbSend] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setResidents(-1);
    setBathrooms('');
    setDescription('');
    setRating(-1);
  };

  const handleAdd = () => {

    // TODO: add form validation

    setDbSend(true);
  }


  useEffect(() => {
    const databaseSend = async () => {
      // Do not currently have functionality to check review limits per account

      if(dbSend === true){
        let rev = createRev(props.dormName, true, residents, bathrooms, description, rating, 0, props.email);
        //console.log(rev);
        let dorm = await getDorm(props.dormName);
        console.log('dorm: ');
        console.log(dorm);
        await addRating(dorm[0], rating);
        postReview(rev);
        handleClose();
        setDbSend(false);
      }
    }
    databaseSend();
  }, [dbSend, props.dormName, residents, bathrooms, description, rating, props.email])



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
            <ResidentsDropdown handleResidentsChange={handleResidentsChange} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <BathroomsDropdown handleBathroomsChange={handleBathroomsChange} />
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
          <Rating handleRatingsChange={handleRatingsChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
