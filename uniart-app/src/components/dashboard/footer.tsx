import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Box component="span">© 2021</Box>
        <Box component="span">Condiciones de uso</Box>
        <Box component="span">Privacidad</Box>
      </Grid>
      <Grid item xs={6}>
        <Box component="span">Síguenos en</Box>
        <Box component="span"><FacebookIcon/> Facebook</Box>
        <Box component="span"><InstagramIcon/> Instagram</Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
