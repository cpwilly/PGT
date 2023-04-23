import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [bathrooms, setBathrooms] = React.useState('');

  const handleChange = (event) => {
    setBathrooms(event.target.value);
    props.handleBathroomsChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bathrooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bathrooms}
          label="Bathrooms"
          onChange={handleChange}
        >
          <MenuItem value={'Communal'}>Communal</MenuItem>
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
