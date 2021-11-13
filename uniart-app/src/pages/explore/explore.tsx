import React from 'react';
import { Container, Typography } from '@mui/material';
import ArtistCards from '../../components/card-custom/artist-cards';
import ServiceCards from '../../components/card-custom/service-cards';
import Footer from '../../components/dashboard/footer';
import { Artista } from '../../models/artista';
import { Servicio } from '../../models/servicio';
import { themeMui } from '../../themes/theme-mui';
import Filter from './filter';
import Fab from '@mui/material/Fab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';


function Explore() {

  let aux: Artista = new Artista();
  aux.nombre = "Artista";
  aux.nombre_usuario = "prueba";
  aux.password = "aaaa"
  aux.id = 1;
  let top_artists = [aux,aux,aux,aux,aux,aux,aux,aux,aux,aux,aux,aux,aux];
  let auxS: Servicio = new Servicio();
  auxS.nombre = "Dibujos de anime";
  auxS.duracion_esperada.days = 2;
  auxS.precio_base = 10;
  let top_services = [auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS];

  return (<>
  <Filter/>

  <Container className={"after-drawer"} sx={{
    backgroundColor:themeMui.palette.primary.main,
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/bgs/coffetti.svg")`,
    backgroundAttachment: "fixed",
    color:themeMui.palette.primary.contrastText}}
  > 
    <Typography variant="h2" >¡Artistas en estreno!</Typography>
    <br/>
    <ArtistCards list={top_artists} min={0} max={5}/>
    <Fab color="primary" aria-label="add"
    sx={{position: "absolute", marginTop: "-10rem", right: "1rem",}}>
      <NavigateNextIcon />
    </Fab>
  </Container>

  <Container  className={"after-drawer"}>
    <ServiceCards list={top_services} min={0} max={20}/>
    <br/><br/>
    <Pagination count={10} showFirstButton showLastButton />
  </Container>

  <Footer className={"after-drawer"}/>
  </>);
};
//<InboxIcon /><MailIcon />
export default Explore;
