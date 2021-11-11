import { Duracion } from "./duracion";

export class Servicio {
  id: number = 0;
  nombre: string = "";
  duracion_esperada: Duracion = new Duracion();
  precio_base: number = 0;
  rating: number = 0;
  q_valoraciones: number = 0;
  es_virtual: boolean = true;
  porc_adelanto: number = 0;
  acepta_rembolso: boolean = true;
  acerca_servicio: string = "";
  q_revisiones: number = 0; //q_reviciones
};