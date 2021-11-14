import React from 'react';
import { Container, Typography } from '@mui/material';
import Footer from '../../components/dashboard/footer';
import { Servicio } from '../../models/servicio';
import { themeMui } from '../../themes/theme-mui';
import Filter from './filter';
import Fab from '@mui/material/Fab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArtistCardsConn from '../../components/card-custom/artist-cards-conn';
import ServiceCardsConn from '../../components/card-custom/service-cards-conn';


function Explore() {

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
    <ArtistCardsConn/>
    <Fab color="primary" aria-label="add"
    sx={{position: "absolute", marginTop: "-10rem", right: "1rem",}}>
      <NavigateNextIcon />
    </Fab>
  </Container>

  <Container  className={"after-drawer"}>
    <ServiceCardsConn/>
  </Container>

  <Footer className={"after-drawer"}/>
  </>);
};
//<InboxIcon /><MailIcon />
export default Explore;
