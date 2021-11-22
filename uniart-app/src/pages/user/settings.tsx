import React from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Footer from '../../components/dashboard/footer';
import { Pais } from '../../models/pais';
import { Ciudad } from '../../models/ciudad';
import CountryCity from '../../components/form/country-city';
import { useUser } from '../session/userContext';
import { GetArtistaUsername } from '../../api/apiArtista';
import { useNavigate } from 'react-router';

function Settings(props:any) {
  const {user} = useUser();
  const navi = useNavigate();
  const [city, setCity] = React.useState(0);
  //const {artistaBUN,refreshArtistaBUN} = GetArtistaUsername(user===undefined?"":user.nombre_usuario);
  
  // React.useEffect(()=>{
  //   refreshArtistaBUN();
  // },[artistaBUN.nombre_usuario === ""]);

  if (user === undefined || user.nombre_usuario===""){ // || 
    console.log(user);
    navi('/login', { replace: true });
    return <></>
  }


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
    <CountryCity city={city} setCity={setCity} />
    </Container>
    <Footer/>
    </>
  );
};

export default Settings;
