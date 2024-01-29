import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

export default function Result() {

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            disabled
            style={{ width: '100%' }}
            fontSize='89px'
            id="standard-multiline-static"
            multiline
            rows={15}
            value={'a'}
            variant="filled"
          />
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
