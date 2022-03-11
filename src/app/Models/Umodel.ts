export interface Respuesta1 {
  mensaje: string;
  usuario: User;
}
export interface Respuesta0 {
  usuario: Users;
}


export interface Users {
  usuario: User[];
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
  usuario?:{
    username: string;
    email:string;
}
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
  
  usuario?:{
    username: string;
    email:string;
}
}
