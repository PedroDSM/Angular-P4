export interface Respuesta {
  actores?: Actores;
  actor?:   Actor;
  mensaje?: string;
}

export interface Actores {
  actores?: Actor[]
}

export interface Actor {
  nombre?:         string;
  f_nacimiento?:   string;
  nacionalidad?:   string;
  inicio_carrera?: string;
  final_carrera?:  string|null;
  actor?: {
    inicio_carrera?: string;
    final_carrera?:  string|null;
  };
}
