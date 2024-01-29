import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';


export default function Palette() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Palette Color
      </Typography>
      <Grid container spacing={3}>
        
        
        
        
        <Grid item xs={12} container justifyContent="flex-start">
            <IconButton aria-label="zoom-in" color="primary">
              <ZoomInIcon />
            </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}