import React from 'react';
import { Servicio } from '../../models/servicio';
import ServiceCard from './service-card';
import { Grid, } from '@mui/material';



function ServiceCards(props: {list:Array<Servicio>, max?:number, min?:number}) { 
  const start:number = (props.min === undefined)? 0 : props.min;
  let end:number = (props.max === undefined)? 10 : props.max;
  if (end > props.list.length) { end = props.list.length; }

  return (
    <Grid container spacing={1} className="cards">
      { props.list.slice(0, end).map( (s)=>
        <ServiceCard {...s}/>
      ) }
    </Grid>
  );
};

export default ServiceCards;
