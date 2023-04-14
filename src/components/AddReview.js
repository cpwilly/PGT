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


export default function AddReview() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
            <Box sx={{mt: 1}}>
                <ResidentsDropdown />
            </Box>
            <Box sx={{mt: 2}}>
                <BathroomsDropdown />
            </Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="description"
            fullWidth
            variant="standard"
          />
          <Rating />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
