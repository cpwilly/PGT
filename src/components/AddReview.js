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

// number of residents
// number of bathrooms
// description
// rating


export default function AddReview(props) {
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

  /* add API call in this function */
  const databaseSend = () => {
    console.log(residents);
    console.log(bathrooms);
    console.log(description);
    console.log(rating);
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
