import React from "react";
import { useState } from "react";

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
    
function DropdownForm() {
  const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    console.log(selected);
  };
  return (
    <form>
      <select 
       value={selected} 
       onChange={(e) => setSelected(e.target.value)}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </form>
  );
}
export default DropdownForm;