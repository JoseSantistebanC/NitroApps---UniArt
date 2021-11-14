import React from 'react'
import ArtistCards from './artist-cards'
import { ArtistCardProps } from './artist-card';
import { Pais } from '../../models/pais';
import { Artista } from '../../models/artista';

const ArtistCardsConn = () => {
  
  //BORRAR
  let aux: Artista = new Artista();
  aux.nombre = "Artista";
  aux.nombre_usuario = "prueba";
  aux.password = "aaaa"
  aux.id = 1;

  
  //reemplazar por el get en la BD
  //let topArtists:Artista[] = new Array<Artista>(0);
  let top_artists = [aux,aux,aux,aux,aux];
  /* CONECTAR CON LA BD Y OBTENER 5 ARTISTAS
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

  const getPaisByCiudadId = (id:number)=>{
    const country = new Pais(); //reemplazar por el get en la BD
    return country.nombre;
  }

  //pasandolo a un formato para las cards
  const topArtistsCards = () => {
    let tac:ArtistCardProps[] = new Array<ArtistCardProps>(0);
    top_artists.map((a,i)=>{
      tac.push({
        id: a.id,
        url_artist_img: a.url_foto_perfil,
        url_cover_img: a.url_foto_portada,
        name: a.nombre_usuario,
        country: getPaisByCiudadId(a.ciudad_id),
        description: a.descripcion.substr(0,144)
      });
    });
    return tac;
  }


  return (
    <ArtistCards list={topArtistsCards()} />
  )
}

export default ArtistCardsConn

/*const start:number = (props.min === undefined)? 0 : props.min;
let end:number = (props.max === undefined)? 10 : props.max;
if (end > props.list.length) { end = props.list.length; }*/