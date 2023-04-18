import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [residents, setResidents] = React.useState('');

  const handleChange = (event) => {
    setResidents(event.target.value);
    props.handleResidentsChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Residents</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={residents}
          label="Residents"
          onChange={handleChange}
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'6'}>6</MenuItem>
          <MenuItem value={'7'}>7</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'9'}>9</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
