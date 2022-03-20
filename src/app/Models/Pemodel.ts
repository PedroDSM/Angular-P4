export interface Respuesta {
  peliculas?: Pelicula[];
  pelicula?: Pelicula;
  comentarios?: Comentarios;
  mensaje?:  string;
}

export interface Comentarios {
  _id:         number;
  comentarios: Comentario[];
  __v:         number;
}

export interface Comentario {
  usuario?:    Usuario;
  comentario?: string;
  _id?:        string;
}

export interface Usuario {
  id:           number;
  nombre:       string;
  f_nacimiento: Date;
  nacionalidad: string;
}


export interface Pelicula {
  id?:            number;
  nombre?:        string;
  descripcion?:   string;
  duracion?:      number;
  calificacion?:  number;
  categoria_id?:  number|null;
  clasificacion_id?: number|null;
  categoria?:     Categoria;
  clasificacion?: Clasificacion;
  idioma?:        Idioma[];
  productora?:    Productora[];
  papeles?:       Papeles[];
}

export interface Categoria {
  id?:     number;
  nombre?: string;
  categoria?:any;
}

export interface Idioma {
  id?:     number;
  nombre?: string;
}

export interface Papeles {
  id?:    number;
  papel?: string;
  actor?: Actor;
}

export interface Actor {
  id?:             number;
  inicio_carrera?: Date;
  final_carrera?:  null;
  persona?:        Persona;
}

export interface Persona {
  id?:           number;
  nombre?:       string;
  f_nacimiento?: Date;
  nacionalidad?: string;
}

export interface Productora {
  id?:          number;
  nombre?:      string;
  presidente?:  string;
  propietario?: string;
  sitio_web?:   string;
}

export interface Clasificacion {
  id?:          number;
  nombre?:      string;
  descripcion?: string;
  edad_minima?: number;
}
