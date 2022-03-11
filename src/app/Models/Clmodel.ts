export interface Clasificaciones {
  clasificaciones: any;
  clasificacion?: Clasificacion;
  mensaje?:       string;
}

export interface Clasificacion {
  nombre?:      string;
  edad_minima?: string;
  descripcion?: string;
  id?:          number;
  clasificacion?: any;
}
