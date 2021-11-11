import React from 'react';
import { Artista } from '../../models/artista';
import ArtistCard from './artist-card';
import { Grid, } from '@mui/material';



function ArtistCards(props: {max:number, list:Array<Artista>}) {  
  return (
    <Grid container spacing={1} sx={{columnGap: "0.5rem", rowGap: "0.5rem",}}>
      { props.list.slice(0, props.max).map( (a)=>
        <ArtistCard {...a}/>
      ) }
    </Grid>
  );
};

export default ArtistCards;
