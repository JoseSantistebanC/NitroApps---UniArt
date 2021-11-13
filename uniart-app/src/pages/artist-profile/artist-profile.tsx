import React from 'react';
import { Container } from '@mui/material';
import { themeMui, blacks, whites } from '../../themes/theme-mui';
//import Box from '@mui/material/Box';

function ArtistProfile() {
  return (
    <Container sx={{
      backgroundColor: blacks.main,
      backgroundImage: `url("${process.env.PUBLIC_URL}/images/bgs/portada.png")`,
      backgroundAttachment: "fixed",
      height: "12em",
    }}>
    </Container>
  );
};

export default ArtistProfile;
