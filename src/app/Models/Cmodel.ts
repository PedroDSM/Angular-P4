export interface Respuesta {
  categorias?: Categoria;
  categoria?: Categoria;
  mensaje?:   string;
}
export interface Categorias {
  categorias?: Categoria[];
}

export interface Categoria {
  nombre?: string;
  id?:     number;
  categoria?:any;
}
