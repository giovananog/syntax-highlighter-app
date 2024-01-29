import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ColorCard from './ColorCard';


export default function Palette() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Palette Color
      </Typography>
      <Grid container spacing={3} justifyContent="center" >
        <Grid item xs={3.5}>
            <ColorCard title='c' color='#ccc'/>
        </Grid>
        <Grid item xs={3.5}>
            <ColorCard title='c' color='#ccc'/>
        </Grid>
        <Grid item xs={3.5}>
            <ColorCard title='c' color='#ccc'/>
        </Grid>
        <Grid item xs={3.5}>
            <ColorCard title='c' color='#ccc'/>
        </Grid>
        <Grid item xs={3.5}>
            <ColorCard title='c' color='#ccc'/>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start">
            <IconButton aria-label="zoom-in" color="primary">
              <ZoomInIcon />
            </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}