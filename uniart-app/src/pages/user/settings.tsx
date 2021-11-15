import React from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Footer from '../../components/dashboard/footer';
import { Pais } from '../../models/pais';
import { Ciudad } from '../../models/ciudad';

function Settings(props:{countries:Pais[],cities:Ciudad[]}) {

  const citiesInCountry = (idCountry:number)=>{
    let _citiesInC: Ciudad[] = [];
    props.cities.forEach((c)=>{
      if (c.pais_id === idCountry) { _citiesInC.push(c); }
    });
    return _citiesInC;
  };

  const [citiesInC, setCities] = React.useState( [new Pais()] );
  const [city, setCity] = React.useState(0);

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCities(citiesInCountry(+event.target.value));
    setCity(0);
  };


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

    <FormControl required>
      <InputLabel id="countries-label">País</InputLabel>
      <Select labelId="countries-label" id="countries"
      onChange={handleCountryChange} label="Países" >
        {props.countries.map((c)=>{return(
          <MenuItem value={c.id}>{c.nombre}</MenuItem>
        )})}
      </Select>
    </FormControl>

    <FormControl required>
      <InputLabel id="ciudad-label">Ciudad</InputLabel>
      <Select labelId="ciudad-label" id="ciudades" label="Ciudades" >
        {citiesInC.map((c)=>{return(
          <MenuItem value={c.id}>{c.nombre}</MenuItem>
        )})}
      </Select>
    </FormControl>

    </Container>

    <Footer/>
    </>
  );
};

export default Settings;
