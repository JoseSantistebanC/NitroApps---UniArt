import React from 'react';
import { Formato } from '../../models/formato';
import { Estilo } from '../../models/estilo';
import { Tecnica } from '../../models/tecnica';
import { Tema } from '../../models/tema';
import { Licencia } from '../../models/licencia';
import NewSGeneral from './new-general';

//reemplazar con datos de la BD
let formatos:Formato[] = [
  {id: 0, nombre: "PNG"},
  {id: 1, nombre: "JPG"},
  {id: 2, nombre: "GIFF"},
  {id: 3, nombre: "TIFF"},
  {id: 4, nombre: "BMP"},
  {id: 5, nombre: "SVG"},
  {id: 6, nombre: "EPS"},
  {id: 7, nombre: "Illustrator"},
  {id: 8, nombre: "Photoshop"},
];
let estilos:Estilo[] = [
  {id: 1, nombre: "Anime"},
  {id: 2, nombre: "Cartoon"},
  {id: 3, nombre: "Cuentos infantiles"},
  {id: 4, nombre: "Vector"},
  {id: 5, nombre: "Oscuro"},
  {id: 6, nombre: "Boceto"},
  {id: 7, nombre: "Lineart"},
  {id: 8, nombre: "Colores planos"},
  {id: 9, nombre: "Full color"},
];
let tecnicas:Tecnica[] = [
  {id: 0, nombre: "Técnica mixta"},
  {id: 1, nombre: "Acuarelas"},
  {id: 2, nombre: "Digital"},
  {id: 3, nombre: "Acrílico"},
];
let temas:Tema[] = [
  {id: 0, nombre: "personajes"},
  {id: 1, nombre: "animales"},
  {id: 2, nombre: "furros"},
  {id: 3, nombre: "paisajes"},
  {id: 4, nombre: "interiores"},
  {id: 5, nombre: "videojuegos"},
  {id: 6, nombre: "diseño"},
  {id: 7, nombre: "logo"},
  {id: 8, nombre: "avatar"},
  {id: 9, nombre: "sticker"},
  {id: 10, nombre: "UI"},
];

let licencias:Licencia[] = [
  {id: 0, nombre: "Uso Personal"},
  {id: 1, nombre: "Creative commons"},
  {id: 2, nombre: "Uso comercial con comisión"},
  {id: 3, nombre: "Uso comercial"},
];

function NewSGeneralConn(props:{id?:string}) {
  return (
    <NewSGeneral id = {props.id}
      formatos = {formatos}
      estilos = {estilos}
      tecnicas = {tecnicas}
      temas = {temas}
      licencias = {licencias}
    />
  );
};

export default NewSGeneralConn;
