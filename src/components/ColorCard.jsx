import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const axios = require('axios');


export default function ColorCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          style={{ backgroundColor: `${props.color}`, height: 100 }}
          alt="pallete color"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.color}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
