import React, { useState } from 'react'
import ArtistCards from './artist-cards'
import { ArtistCardProps } from './artist-card';
import { Pais } from '../../models/pais';
import { Artista } from '../../models/artista';
import apiArtista from '../../api/apiArtista';
import apiPais from '../../api/apiPais';
import apiCiudad from '../../api/apiCiudad';
import { Api } from '@mui/icons-material';
import { Usuario } from '../../models/usuario';
import { useNavigate } from "react-router-dom";

import { get } from 'https';
import { Ciudad } from '../../models/ciudad';

const ArtistCardsConn = () => {

    //BORRAR
    //let aux: Artista = new Artista();
    //aux.nombre = "Artista";
    //aux.nombre_usuario = "hombre";
    //aux.password = "aaaa"
    //aux.id = 1;

    //reemplazar por el get en la BD

    /*let topArtists: Artista[] = new Array<Artista>(5);*/


    /* const [custom] = useState<Usuario>(new Usuario());*/
    //custom.id = 4;
    //const history = useNavigate();
    //let i = 0;
    //while (i++ < 5) {
    //    topArtists[i] = {
    //        id: i,
    //        nombre_usuario: "Artista",
    //        password: "",
    //        email: "",
    //        nombre: "",
    //        apellido: "",
    //        ciudad_id: 15,
    //        url_foto_perfil: "",
    //        fecha_registro: new Date(),
    //        descripcion: "",
    //        url_foto_portada: `images/bgs/PortadaBg.svg`,
    //        rating: 0,
    //        q_valoraciones: 0,
    //    };
    /*apiUsuario.add(custom).then(() => { history.p("/usuario/add");});*/

    let paises: Pais[] = [];

    apiPais.list().then((res) => {
        res.map((r, i) => {
            paises.push(r);
        });
    });

    let ciudades: Ciudad[] = [];

    apiCiudad.list().then((res) => {
        res.map((r, i) => {
            ciudades.push(r);
        });
    });


    /*let top_artists = [aux,aux,aux,aux];*/
    /*   CONECTAR CON LA BD Y OBTENER 5 ARTISTAS*/

    const getPaisByCiudadId = (id: number) => {
        paises.map((r, i) => {
            if (r.id == id) { return r.nombre; }
        });
        return "";
    }

    //pasandolo a un formato para las cards
    const topArtistsCards = () => {
        let tac: ArtistCardProps[] = new Array<ArtistCardProps>(0);
        apiArtista.list().then((res) => {
            console.log(res);
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
        });
        console.log(tac);
        return tac;
    };


    return (
        <ArtistCards list={topArtistsCards()} />
    )
};

export default ArtistCardsConn;

/*const start:number = (props.min === undefined)? 0 : props.min;
let end:number = (props.max === undefined)? 10 : props.max;
if (end > props.list.length) { end = props.list.length; }*/