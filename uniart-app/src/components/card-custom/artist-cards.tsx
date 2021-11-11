import React from 'react';
import { Artista } from '../../models/artista';
import ArtistCard from './artist-card';
import { Grid, } from '@mui/material';



function ArtistCards() {
  let aux: Artista = new Artista();
  aux.nombre = "Artista";
  aux.nombre_usuario = "prueba";
  aux.password = "aaaa"
  aux.id = 1;
  
  let top_artists = [aux,aux,aux];

  return (
    <Grid container spacing={1}>
      { top_artists.map( (a)=>
        <ArtistCard {...a}/>
      ) }
    </Grid>
  );
};

export default ArtistCards;
