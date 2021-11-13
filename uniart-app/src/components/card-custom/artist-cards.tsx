import React from 'react';
import { Artista } from '../../models/artista';
import ArtistCard from './artist-card';
import { Grid, } from '@mui/material';



function ArtistCards(props: {list:Array<Artista>, max?:number, min?:number}) {
  const start:number = (props.min === undefined)? 0 : props.min;
  let end:number = (props.max === undefined)? 10 : props.max;
  if (end > props.list.length) { end = props.list.length; }

  return (
    <Grid container spacing={1} sx={{columnGap: "0.5rem", rowGap: "0.5rem",}}>
      { props.list.slice(0, end).map( (a)=>
        <ArtistCard {...a}/>
      ) }
    </Grid>
  );
};

export default ArtistCards;
