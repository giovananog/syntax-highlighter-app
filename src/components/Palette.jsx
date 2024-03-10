import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ColorCard from './ColorCard';
import axios from 'axios';


async function getPalette() {
  try {
    const colors = ['strings', 'reserved words', 'types', 'one line comments', 'multline comments'];
    const colors_dict = [];

    for (let i = 0; i < 5; i++) {
      const response = await axios.get('https://www.thecolorapi.com/random');
      colors_dict.push({ title: colors[i], color: response.data.hex.value });
    }
    return colors_dict;
  } catch (error) {
    console.error('Error', error.message);
    throw error;
  }
}


export default function Palette({ onUpdateColors }) {

  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getPalette();
      setColors(result);
      onUpdateColors(result);
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Color Palette 
      </Typography>
      <Grid container spacing={3} justifyContent="center" >

      {colors.map(data => (
        <Grid item xs={3.5}>
            <ColorCard title={data.title} color={data.color}/>
        </Grid>
      ))}
        <Grid item xs={12} container justifyContent="flex-start">
            <IconButton aria-label="zoom-in" color="primary">
              <ZoomInIcon />
            </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}