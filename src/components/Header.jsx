import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function Header() {
  const [mode, setMode] = React.useState(true);
  
  const handleChange = (event) => {
    setMode(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Syntax Highlighter
          </Typography>
          <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={mode}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={mode ? 'dark mode' : 'light mode'}
        />
      </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}