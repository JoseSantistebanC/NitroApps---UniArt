import React from 'react';
import { Servicio } from '../../models/servicio';
import ServiceCard from './service-card';
import { Grid, } from '@mui/material';



function ArtistCards(props: {max:number, list:Array<Servicio>}) {  
  return (
    <Grid container spacing={1} sx={{columnGap: "0.5rem", rowGap: "0.5rem",}}>
      { props.list.slice(0, props.max).map( (s)=>
        <ServiceCard {...s}/>
      ) }
    </Grid>
  );
};

export default ArtistCards;
