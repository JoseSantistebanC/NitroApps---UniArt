import React, { useState } from 'react'
import ArtistCards from './artist-cards'
import { ArtistCardProps } from './artist-card';
import { Pais } from '../../models/pais';
import { Artista } from '../../models/artista';
import apiArtista from '../../api/apiArtista';
import apiPais from '../../api/apiPais';
import apiCiudad from '../../api/apiCiudad';
import { Ciudad } from '../../models/ciudad';

const ArtistCardsConn = () => {
  const [paises, setPaises] = React.useState<Pais[]>([]);
  const [ciudades, setCiudades] = React.useState<Ciudad[]>([]);
  const [artistas, setArtistas] = React.useState<Artista[]>([]);
  const [list, setList] = React.useState<ArtistCardProps[]>([]);

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

  function refreshPaises() {
    apiPais.list().then((res) => {
      setPaises(res);
    });
  }
  function refreshCiudades(){
    apiCiudad.list().then((res) => {
      setCiudades(res);
    });
  }
  function refreshArtistas(){
    apiArtista.list().then((res) => {
      setArtistas(res);
    });
  }
  function refreshCards(){
    let tac = new Array<ArtistCardProps>(0);
    apiArtista.list().then((res) => {
      console.log('axios',res);
      res.map((a, i) => {
          tac.push({
              id: a.id,
              url_artist_img: a.url_foto_perfil,
              url_cover_img: a.url_foto_portada,
              name: a.nombre_usuario,
              country: getPaisByCiudadId(a.ciudad_id),
              description: a.descripcion.substr(0, 144)
          });
      });
      setList(tac);
    })
    .catch(()=>{
        console.log("No se recibió la tabla artistas");
    })
    .then(()=>{/*nada*/});
  }
  

  React.useEffect(() => {
    refreshPaises();
    refreshCiudades();
    refreshArtistas();
    refreshCards();
  }, []);

  return <ArtistCards list={list}/>;
};

export default ArtistCardsConn;

/*const start:number = (props.min === undefined)? 0 : props.min;
let end:number = (props.max === undefined)? 10 : props.max;
if (end > props.list.length) { end = props.list.length; }*/