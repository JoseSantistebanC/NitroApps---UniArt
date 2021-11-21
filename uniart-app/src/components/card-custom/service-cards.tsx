import React from 'react';
import ServiceCard, { ServiceCardProps } from './service-card';
import { Grid, Pagination, } from '@mui/material';
import { filterProps } from '../../pages/explore/filter';
import { ListServicios, ListServiciosArtista } from '../../api/apiServicio';
import { Servicio } from '../../models/servicio';
import { ListArtistas } from '../../api/apiArtista';
import { Artista } from '../../models/artista';


function ServiceCards(props: { //
  artistid?:number,
  max?:number, search?:string,
  filters?: filterProps
}) { 
  const {servicio, refreshServicio} = ListServicios();
  const {servicioByA, refreshServicioByA} = ListServiciosArtista(props.artistid===undefined?0:props.artistid);
  const {artistas, refreshArtistas} = ListArtistas();
  const [list, setList] = React.useState(new Array<ServiceCardProps>());
  const [pagination, setPagination] = React.useState(<></>);
  
  const getArtista = (id:number) =>{
    let artist = new Artista();
    artistas.forEach((a)=>{
      if (a.id === id) { return a; }
    });
    return artist;
  }
  
  const toServiceCards = (servs:Servicio[])=>{
    let aux = new Array<ServiceCardProps>();
    servs.forEach((s)=>{
      const a = getArtista(s.artista_id);
      aux.push({
        id: s.id,
        url_img: "",
        name: s.nombre,
        artist_url_img: a.url_foto_perfil,
        artist_name: a.nombre_usuario,
        artist_rating: a.rating,
        artist_qreviews: a.q_valoraciones,
        since_time: s.duracion_esperada.days,
        since_price: s.precio_base
      });
    });
    return aux;
  };

  const getPages = (servsLen:number)=>{
    let end:number = (props.max === undefined)? 10 : props.max;
    if (end > servsLen) { end = servsLen; }
    const numpags = Math.round(end / 10);
    return numpags > 1 ?
        <Pagination count={10} showFirstButton showLastButton />
        :<></>;
  };

  React.useEffect(()=>{
    console.log(servicio);
    props.artistid === undefined? refreshServicio() : refreshServicioByA();
    refreshArtistas();
    setList( toServiceCards(servicio) );
    setPagination(getPages(servicio.length));
  },[servicio.length===0,servicio===null,servicio===undefined]);

  
  return (
    <Grid container spacing={1} className="cards">
      { list.map( (s)=> {
        return <ServiceCard {...s}/>
      } ) }
      
      <br/><br/>
      {pagination}
    </Grid>
  );
};

export default ServiceCards;


/*
const start:number = (props.min === undefined)? 0 : props.min;
  
*/