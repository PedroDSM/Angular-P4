export interface Actores {
  actores: any;
  actor?:   Actor;
  mensaje?: string;
}

export interface Actor {
  nombre?:         string;
  f_nacimiento?:   string;
  nacionalidad?:   string;
  inicio_carrera?: string;
  final_carrera?:  string;
  actor?:             any;
}
