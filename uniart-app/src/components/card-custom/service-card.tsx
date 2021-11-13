import React from 'react';
import { themeMui } from '../../themes/theme-mui'
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Servicio } from '../../models/servicio';
import { Artista } from '../../models/artista';

function ServiceCard(props:Servicio) {
  let artist: Artista = new Artista();
  artist.id = props.artista_id;
  artist.nombre_usuario = "Prueba";

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="160"
          image={props.url_img_referencia} alt="portada" />
        <CardContent>
          <Typography variant="h5" component="div">
            Realizaré {props.nombre}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: themeMui.palette.primary.main, width: 24, height: 24 }}
                alt="Artist" src={artist.url_foto_perfil}  />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="span"> {artist.nombre_usuario} </Typography>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <ListItemIcon> <StarIcon color="info"/>  </ListItemIcon>
                <ListItemText primary={artist.rating + '('+artist.q_valoraciones+')'}/>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography component="span">
                <strong>{props.duracion_esperada.days}D</strong> APROX.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span">DESDE <strong>${props.precio_base}</strong></Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;