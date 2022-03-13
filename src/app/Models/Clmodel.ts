export interface Respuesta {
  clasificaciones?: Clasificaciones;
  clasificacion?: Clasificacion;
  mensaje?:       string;
}
export interface Clasificaciones {
  clasificaciones?: Clasificacion[];
}
export interface Clasificacion {
  nombre?:      string;
  edad_minima?: string;
  descripcion?: string;
  id?:          number;
  clasificacion?: any;
}
