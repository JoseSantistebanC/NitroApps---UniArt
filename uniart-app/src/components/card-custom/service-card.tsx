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

function ServiceCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="200"
          image={process.env.PUBLIC_URL + '/images/bgs/portada.png'} alt="portada" />
        <CardContent>
          <Typography variant="h5" component="div">
            Realizaré ...
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: themeMui.palette.primary.main, width: 24, height: 24 }}
                alt="Artist" src="/static/images/avatar/1.jpg"  />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="span"> NombreArtista </Typography>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <ListItemIcon> <StarIcon color="secondary"/>  </ListItemIcon>
                <ListItemText primary="###">  </ListItemText>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography component="span"><strong>2D</strong> APROX.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span">DESDE <strong>$10</strong></Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;