import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Apply from '../highlight-code';

const Result = ({ code }) => {
  const highlightedCode = Apply(code);
  console.log(highlightedCode);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
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

export default Result;
