export interface Respuesta {
  idiomas?: Idiomas;
  idioma?:  Idioma;
  mensaje?: string;
}
export interface Idiomas {
  idiomas?: Idioma[];
}

export interface Idioma {
  nombre?: string;
  id?:     number;
  idioma?:any;
}
