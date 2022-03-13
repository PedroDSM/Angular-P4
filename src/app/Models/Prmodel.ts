export interface Respuesta {
  productoras?: Productoras;
  productora?: Productora;
  mensaje?:    string;
}
export interface Productoras {
  productoras?: Productora[];
}
export interface Productora {
  nombre?:      string;
  presidente?:  string;
  propietario?: string;
  sitio_web?:   string;
  id?:          number;
  productora?:any;
}
