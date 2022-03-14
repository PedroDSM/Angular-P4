export interface Peliculas {
  peliculas: any;
  pelicula?: Pelicula[];
  mensaje?:  string;
}

export interface Pelicula {
  id?:               number;
  nombre?:           string;
  descripcion?:      string;
  duracion?:         string;
  calificacion?:     string;
  clasificacion_id?: number;
  categoria_id?:     number;
  categoria?:        Categoria;
  clasificacion?:    Clasificacion;
  pelicula?:any;
}

export interface Categoria {
  id?:     number;
  nombre?: string;
}

export interface Clasificacion {
  id?:          number;
  nombre?:      string;
  descripcion?: string;
  edad_minima?: string;
}
