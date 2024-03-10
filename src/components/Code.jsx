import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const codeExample = `function example() {
  console.log('Olá, Mundo!');
}`;

const Code = ({ onUpdateCode, onUpdateLanguage }) => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(codeExample);

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    onUpdateLanguage(event.target.value);
  };

  const handleChangeCode = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    onUpdateCode(newCode);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            style={{ width: '100%' }}
            id="standard-multiline-static"
            label="Code"
            multiline
            rows={15}
            value={code}
            onChange={handleChangeCode}
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={handleChangeLanguage}
            >
              <MenuItem value="javascript">JavaScript</MenuItem>
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="java">Java</MenuItem>
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
};

export default Code;