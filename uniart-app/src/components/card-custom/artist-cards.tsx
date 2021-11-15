import React from 'react';
import ArtistCard, { ArtistCardProps } from './artist-card';
import { Grid, Pagination, } from '@mui/material'; 
import { ListArtistas } from '../../api/apiArtista';
import { ListCiudades } from '../../api/apiCiudad';
import { ListPaises } from '../../api/apiPais';

function ArtistCards(props: {max?:number}) {
  const {paises, refreshPaises} = ListPaises();
  const {ciudades, refreshCiudades} = ListCiudades();
  const {artistas, refreshArtistas} = ListArtistas();
  const [list, setList] = React.useState(new Array<ArtistCardProps>());

  const getPaisByCiudadId = (id: number) => {
    ciudades.map((c) => {
      if (c.id === id) {
        paises.map((p)=>{
          if (p.id === c.pais_id) {return c.nombre;}
        })
      }
    });
    return "";
  }

  function refreshCards(){
    artistas.map((a)=>{
      list.push({
        id: a.id,
        url_artist_img: a.url_foto_perfil,
        url_cover_img: a.url_foto_portada,
        name: a.nombre_usuario,
        country: getPaisByCiudadId(a.ciudad_id),
        description: a.descripcion.substr(0, 144),
      });
    });
    setList(list);
  }
  
  React.useEffect(() => {
    console.log("cargó effect");
    refreshCiudades();
    refreshPaises();
    refreshArtistas();
    refreshCards();
  }, [artistas.length===0]);


  let end:number = (props.max === undefined)? 10 : props.max;
  if (end > list.length) { end = list.length; } 
  const pagination = () => {
    let numpags = Math.round(end / 10);
    return numpags > 1 ?
      <Pagination count={10} showFirstButton showLastButton />
      :<></>;
  };

  return (
    <Grid container spacing={1} className="cards">
      { list.slice(0,end).map( (a)=>
        <ArtistCard {...a}/>
      ) }
      
      <br/><br/>
      { pagination }
    </Grid>
  );
};

export default ArtistCards;
