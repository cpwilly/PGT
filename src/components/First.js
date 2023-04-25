import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const options = [
  "Clarke",
  "Cutler",
  "Cutter",
  "Hitchcock",
  "Norton",
  "Pierce",
  "Raymond",
  "Sherman",
  "Smith",
  "Storrs",
  "Taft",
  "Taplin",
  "Tyler"
];

function DropdownForm(props) {
  let navigate = useNavigate();
  const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    props.setSelected(selected);
    navigate('DisplayPage');
  };
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth margin="normal">
          <Select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{ background: 'white' }}
          >
            {options.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size="large" variant="contained" type="button" onClick={submit}>Submit</Button>
      </Box>
    </>
  );
}
export default DropdownForm;