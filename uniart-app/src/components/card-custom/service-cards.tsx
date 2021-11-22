import React, { useEffect } from 'react';
import ServiceCard, { ServiceCardProps } from './service-card';
import { Grid, Pagination, } from '@mui/material';
import { filterProps } from '../../pages/explore/filter';
import { ListServicios, ListServiciosArtista } from '../../api/apiServicio';
import { Servicio } from '../../models/servicio';
import { ListArtistas } from '../../api/apiArtista';
import { Artista } from '../../models/artista';
import { ListPaises } from '../../api/apiPais';
import { ListCiudades } from '../../api/apiCiudad';


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
    //console.log('serArt:', id, artistas);
    for (let i = 0; i < artistas.length; i++) {
      if (artistas[i].id === id) { 
        console.log('___',artistas[i]); 
        return artistas[i];
      }
    }
    return new Artista();
  }
  
  const toServiceCards = (servs:Servicio[])=>{
    let aux = new Array<ServiceCardProps>();
    servs.forEach((s)=>{ 
      const a = getArtista(s.artista_id);
      console.log(a.id);
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


  useEffect(()=>{
    if (props.artistid !== undefined) return
    refreshArtistas();
    console.log(servicio);
    refreshServicio();
    setList( toServiceCards(servicio) );
    setPagination(getPages(servicio.length));
  },[servicio.length === 0,
    servicio === null, servicio === undefined]);
  
    
  useEffect(()=>{
    if (props.artistid === undefined) return
    refreshArtistas();
    console.log(servicioByA);
    refreshServicioByA();
    setList( toServiceCards(servicioByA) );
    setPagination(getPages(servicioByA.length));
  },[servicioByA.length === 0, servicioByA === null,
    servicioByA === undefined]);

  
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
export {};

/*
const start:number = (props.min === undefined)? 0 : props.min;
  
*/