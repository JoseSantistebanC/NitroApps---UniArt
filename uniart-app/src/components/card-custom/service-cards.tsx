import React from 'react';
import ServiceCard, { ServiceCardProps } from './service-card';
import { Grid, Pagination, } from '@mui/material';

function ServiceCards(props: {list:Array<ServiceCardProps>,max?:number}) { 
  let end:number = (props.max === undefined)? 10 : props.max;
  if (end > props.list.length) { end = props.list.length; }
  const pagination = () => {
    let numpags = Math.round(end / 10);
    return numpags > 1 ?
      <Pagination count={10} showFirstButton showLastButton />
      :<></>;
  };
  
  return (
    <Grid container spacing={1} className="cards">
      { props.list.map( (s)=>
        <ServiceCard {...s}/>
      ) }
      
      <br/><br/>
      {pagination}
    </Grid>
  );
};

export default ServiceCards;


/*
const start:number = (props.min === undefined)? 0 : props.min;
  
*/