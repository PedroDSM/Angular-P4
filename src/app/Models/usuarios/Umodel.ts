export interface Respuesta1 {
  mensaje: string;
  user: User;
}
export interface Respuesta0 {
  users: Users;
}


export interface Users {
  users: User[];
}

export interface User {
  id: number;
  nombre: string;
  username: string;
  password: string;
  password_confirmation: string;
  email:string;
  f_nacimiento: string;
  nacionalidad: string;
}
export interface User2 {
  nombre: string;
  username: string;
  password: string;
  password_confirmation: string;
  email: string;
  f_nacimiento: string;
  nacionalidad: string;
}
export interface User3 {
  nombre: string;
  username: string;
  email: string;
  f_nacimiento: string;
  nacionalidad: string;
}
