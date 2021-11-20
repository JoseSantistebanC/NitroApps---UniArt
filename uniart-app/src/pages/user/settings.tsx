import React from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Footer from '../../components/dashboard/footer';
import { Pais } from '../../models/pais';
import { Ciudad } from '../../models/ciudad';
import CountryCity from '../../components/form/country-city';

function Settings(props:any) {
  const [city, setCity] = React.useState(0);

  return (
    <>
    <Container maxWidth={"xs"} sx={{
      display:"flex", flexDirection:"column",
      rowGap:"1em", 
    }}>
    <Typography component="strong">Cuenta</Typography>
    <br/>
    <TextField id="nombres" label="Nombres" required />
    <TextField id="apellidos" label="Apellidos" required />
    <CountryCity city_id={city} setCity={setCity} />
    </Container>
    <Footer/>
    </>
  );
};

export default Settings;
