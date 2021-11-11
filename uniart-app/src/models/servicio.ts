import { Duracion } from "./duracion";

export class Servicio {
  id: number = 0;
  nombre: string = "";
  artista_id: number = 0;
  duracion_esperada: Duracion = new Duracion();
  precio_base: number = 0;
  rating: number = 0;
  q_valoraciones: number = 0;
  es_virtual: boolean = true;
  porc_adelanto: number = 0;
  acepta_rembolso: boolean = true;
  acerca_servicio: string = "";
  q_revisiones: number = 0; //q_reviciones

  url_img_referencia: string = process.env.PUBLIC_URL + '/images/bgs/portada.png'
};