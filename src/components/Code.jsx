import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

export default function Code() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            style={{ width: '100%' }}
            fontSize='89px'
            id="standard-multiline-static"
            label="Code"
            multiline
            rows={15}
            defaultValue="Default Value"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Javascript</MenuItem>
              <MenuItem value={20}>Python</MenuItem>
              <MenuItem value={30}>Java</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} container justifyContent="flex-end">
            <IconButton aria-label="zoom-in" color="primary">
              <ZoomInIcon />
            </IconButton>
            <IconButton aria-label="zoom-out" color="primary">
              <ZoomOutIcon />
            </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
