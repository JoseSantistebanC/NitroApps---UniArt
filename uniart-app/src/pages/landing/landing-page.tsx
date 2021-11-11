import React from 'react'
import { Button, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import ArtistCards from '../../components/card-custom/artist-cards';
import { Artista } from '../../models/artista';
import ServiceCards from '../../components/card-custom/service-cards';
import { Servicio } from '../../models/servicio';
import { themeMui, blacks, whites } from '../../themes/theme-mui';

function LandingPage() {
  let aux: Artista = new Artista();
  aux.nombre = "Artista";
  aux.nombre_usuario = "prueba";
  aux.password = "aaaa"
  aux.id = 1;
  let top_artists = [aux,aux,aux,aux,aux,aux,aux,aux,aux,aux];
  let auxS: Servicio = new Servicio();
  auxS.nombre = "Dibujos de anime";
  auxS.duracion_esperada.days = 2;
  auxS.precio_base = 10;
  let top_services = [auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS];

  const btnDBGStyle = {
    backgroundColor: whites.main,
    color: blacks.main,
    '&:hover': {backgroundColor:whites.light,}
  };

  return (
    <>
    <Container>
      <Paper elevation={1}>
        <Typography variant="h1" component="h1">
        UNIFICANDO PASIONES Y EMPRENDIMIENTOS.
        </Typography>
        <Typography component="p">
          Únete a nuestra comunidad de artistas y emprendedores y podrás:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon> <CheckIcon color="primary"/> </ListItemIcon>
            <ListItemText primary="Ver el progreso y estado de tus solicitudes de servicios" />
          </ListItem>
          <ListItem>
            <ListItemIcon> <CheckIcon color="primary"/> </ListItemIcon>
            <ListItemText primary="Comunicarte diréctamente con el artista comisionado" />
          </ListItem>
          <ListItem>
            <ListItemIcon> <CheckIcon color="primary"/> </ListItemIcon>
            <ListItemText primary="Encontrar artistas independientes variados" />
          </ListItem>
          <ListItem>
            <ListItemIcon> <CheckIcon color="primary"/> </ListItemIcon>
            <ListItemText primary="ncontrar eficazmente el servicio artístico que buscas" />
          </ListItem>
        </List>
      </Paper>
    </Container>

    <Container sx={{
      backgroundColor: themeMui.palette.secondary.main,
      color: themeMui.palette.secondary.contrastText,
      }}>
      <Typography variant="h1" component="h1">Servicios más populares</Typography>
      <ArtistCards max={5} list={top_artists} />
      <br/>
      <Button sx={btnDBGStyle}>Descubrir más</Button>
    </Container>

    <Container sx={{
      backgroundColor: themeMui.palette.primary.main,
      color: themeMui.palette.primary.contrastText,
      }}>
      <Typography variant="h1" component="h1">¡Artistas en estreno!</Typography>
      <ServiceCards max={5} list={top_services} />
      <br/>
      <Button sx={btnDBGStyle}>Descubrir más</Button>
    </Container>

    <Container>
      <Typography variant="h1"> LO QUE MÁS REQUIERES PARA UN BUEN FREELO ARTÍSTICO: </Typography>
    </Container>

    <Container sx={{backgroundColor: blacks.main, color: whites.main}}>
      <Typography variant="h1"> ¿Cómo lo logramos? </Typography>
      <br/>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography variant="h4" component="h2">Comunicación</Typography>
          <List>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Comunicarte diréctamente con el artista comisionado." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Conoce más del artista visitando sus otras redes sociales desde su perfil." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Elige entre diferentes características del servicio ofrecido, ¡e incluso incluye referencias! Todo para mantener una misma idea del servicio final." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          imagen
        </Grid>
      </Grid>
      <br/><Divider/><br/>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography variant="h4" component="h2">Organización</Typography>
          <List>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Manténte al tanto del progreso de las artes solicitadas mediante el tablero de historial." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Filtra las comisiones realizadas, en progreso. y verifica los servicios próntos a entregarse." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Cuando un artista realiza un avane en el proyecto, podrás verificarlo desde tu historial." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          imagen
        </Grid>
      </Grid>
      <br/><Divider/><br/>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography variant="h4" component="h2">Eficacia</Typography>
          <List>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Filtra detalladamente el servicio que estás buscando." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Brinda un primer alcance detallado al artista y ahorra tiempo." />
            </ListItem>
            <ListItem>
              <ListItemIcon> <CheckIcon color="info"/> </ListItemIcon>
              <ListItemText primary="Observa los avances y comunica las observaciones por cada revisión." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          imagen
        </Grid>
      </Grid>
    </Container>

    <Container sx={{
      backgroundColor: themeMui.palette.info.main,
      paddingTop: "8rem",
      paddingBottom: "8rem",
    }}>
      <Typography variant="h1"> ¡ÚNETE A LA COMUNIDAD! </Typography>
      <Button variant="contained" color="primary">Descubrir más</Button>
    </Container>
  </>
  );
};

export default LandingPage;
