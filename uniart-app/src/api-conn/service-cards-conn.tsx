import React from 'react'
import { Pais } from '../models/pais';
import { Artista } from '../models/artista';
import { Servicio } from '../models/servicio';
import ServiceCards from '../components/card-custom/service-cards';
import { ServiceCardProps } from '../components/card-custom/service-card';
import { ServicioVariacion } from '../models/servicio_variacion';

const ServiceCardsConn = (props:{id_artist?:number}) => {

  let url_img_base = `${process.env.PUBLIC_URL}/images/bgs/PortadaBg.svg`;
  
  //BORRAR
  let auxS: Servicio = new Servicio();
  auxS.nombre = "Dibujos de anime";
  auxS.duracion_esperada.days = 2;
  auxS.precio_base = 10;

  //reemplazar por el get en la BD
  let top_services = [auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS];
  /* CONECTAR CON LA BD Y OBTENER LOS SERVICIOS
  //SI SE ENVIA UN ID, SOLO los servicios de ese ARTISTA ID
  //SINO de todo
  id: number = 0;
  nombre_usuario: string = "Artista";
  password: string = "";
  email: string = "";
  nombre: string = "";
  apellido: string = "";
  ciudad_id: number = 0;
  url_foto_perfil: string = "";
  fecha_registro: Date = new Date();
  descripcion: string = "";
  url_foto_portada: string = `${process.env.PUBLIC_URL}/images/bgs/PortadaBg.svg`;
  rating: number = 0;
  q_valoraciones: number = 0;
  */

  const getArtista = (id:number)=>{
    const artista = new Artista(); //reemplazar por el get en la BD
    return artista;
  }
  

  const getUrlImagenBase = (id:number) => { //id del servicio
     //reemplazar por el get en la BD
    //obtener solo el 1ero de la base de datos
    let servicio_var = new ServicioVariacion();
    return servicio_var.url_imagen_referencia === "" ? 
    url_img_base : servicio_var.url_imagen_referencia;
  };

  //pasandolo a un formato para las cards
  const servCards = () => {
    let scs:ServiceCardProps[] = new Array<ServiceCardProps>(0);
    top_services.map((s,i)=>{
      let a = getArtista(s.artista_id);
      scs.push({
        id: s.id,
        url_img: getUrlImagenBase(s.id),
        name: s.nombre,
        artist_url_img: a.url_foto_perfil,
        artist_name: a.nombre_usuario,
        artist_rating: a.rating,
        artist_qreviews: a.q_valoraciones,
        since_time: s.duracion_esperada.days,
        since_price: s.precio_base
      });
    });
    return scs;
  }


  return (
    <ServiceCards list={servCards()} />
  )
}

export default ServiceCardsConn

/*const start:number = (props.min === undefined)? 0 : props.min;
let end:number = (props.max === undefined)? 10 : props.max;
if (end > props.list.length) { end = props.list.length; }*/