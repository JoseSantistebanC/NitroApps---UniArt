import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import ArtistCards from '../../components/card-custom/artist-cards';

function LandingPage() {
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
    <Container>
      <Typography variant="h1" component="h1">SERVICIOS MÁS POPULARES</Typography>
      <ArtistCards/>
    </Container>
  </>
  );
};

export default LandingPage;
