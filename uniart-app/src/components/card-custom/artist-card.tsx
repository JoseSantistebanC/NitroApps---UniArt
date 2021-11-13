import React from 'react';
import { themeMui } from '../../themes/theme-mui'
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import { Artista } from '../../models/artista';

function generate(element: React.ReactElement) {
  return [0, 1].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function ArtistCard(props:Artista) {

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="144"
          image={props.url_foto_portada} alt="portada" />
        <CardContent sx={{paddingTop: 0,}}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Avatar sx={{
                bgcolor: themeMui.palette.primary.main,
                width: 72, height: 72,
                marginLeft: "-0.75rem",
                marginTop: "-1rem",
                border: " solid 4pt",
              }}
                alt={props.nombre_usuario} src=""  />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h5" component="h5"> {props.nombre_usuario} </Typography>
              <ListItem>
                <ListItemIcon><RoomIcon color="secondary"/></ListItemIcon>
                <ListItemText primary={props.ciudad_id} />
              </ListItem>
            </Grid>
          </Grid>
          <List sx={{padding: "0px",}}>
            { generate(
              <ListItem sx={{width: "fit-content",}}>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>,
            ) }
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistCard;