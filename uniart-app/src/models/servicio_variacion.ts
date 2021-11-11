import { Duracion } from "./duracion";

export class ServicioVariacion {
  id: number = 0;
  incluir_editable: boolean = true;
  q_revisiones: number = 0; //q_reviciones
  duracion_esperada: Duracion = new Duracion();
  precio_base: number = 0;
  url_imagen_referencia: string = "";
};