import { Typography } from "@mui/material";
import React from "react";


export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}  
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}