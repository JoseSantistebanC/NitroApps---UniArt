import React from 'react';
import ArtistCard, { ArtistCardProps } from './artist-card';
import { Grid, Pagination, } from '@mui/material';


function ArtistCards(props: {list:Array<ArtistCardProps>, max?:number}) {
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
      { props.list.slice(0,end).map( (a)=>
        <ArtistCard {...a}/>
      ) }
      
      <br/><br/>
      { pagination }
    </Grid>
  );
};

export default ArtistCards;
