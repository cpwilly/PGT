import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";



const options = ["1609 Hazel Apartments",
    "1680 Apartments", 
    "1716 Apartments", 
    "1719 Apartments", 
    "1727 Apartments", 
    "Stephanie Tubbs Jones", 
    "The Monroe Apartments",
    "The Noble Apartment Building", 
    "The Village House 1",
    "The Village House 2",
    "The Village House 3",
    "The Village House 3A",
    "The Village House 4",
    "The Village House 5",
    "The Village House 6",
    "The Village House 7",
    "Triangle Towers",
    "Twin Gables"];
    
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
        <FormControl fullWidth margin = "normal">
          <Select
            value={selected} 
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size = "large" variant="contained" type="button" onClick={submit}>Submit</Button>
      </Box>
    </>
  );
}
export default DropdownForm;