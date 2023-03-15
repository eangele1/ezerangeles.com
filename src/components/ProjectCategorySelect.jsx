import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as data from '../data/data.json';

export default function ProjectCategorySelect({setItems}) {
  const [category, setCategory] = React.useState("Choose a Category");

  const handleChange = (event) => {
    setCategory(event.target.value);
    setItems(data[event.target.value]);
  };

  return (
    <div>
      <FormControl sx={{ my: 5, minWidth: 80 }} size="medium">
        <Select
          value={category}
          onChange={handleChange}
          sx={{
            width: 240,
            border: "1px solid darkgrey",
            color: "#fff",
            "& .MuiSvgIcon-root": {
                color: "white",
            },
            }}
        >
          <MenuItem disabled value={"Choose a Category"}>
            Choose a Category
          </MenuItem>
          <MenuItem value={"video"}>Video</MenuItem>
          <MenuItem value={"audio"}>Audio</MenuItem>
          <MenuItem value={"software"}>Software</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}