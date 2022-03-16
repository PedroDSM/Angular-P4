export interface Respuesta {
  mensaje?: string;
  usuario?: User;
  usuarios?: Users;
  token?: Token;
}
export interface Users {
  usuario?: User[];
}

export interface User {
  id?: number;
  nombre?: string;
  username?: string;
  password?: string;
  rol? : string;
  password_confirmation?: string;
  email?:string;
  f_nacimiento?: string|Date|number;
  nacionalidad?: string;
  cuenta?:{
    username: string;
    email:string;
  }
}
export interface Token {
  type?: string;
  token?: string;
}
