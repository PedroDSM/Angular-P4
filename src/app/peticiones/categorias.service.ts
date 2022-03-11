import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Categoria, Categorias } from '../Models/Cmodel';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public categorias: any = []
  constructor(private http: HttpClient) {
  console.log('Servicio funcionando');}
  urlBase = 'http://127.0.0.1:3333/categorias'
  getAll(){
    return this.http.get<Categorias>(this.urlBase)
  }
  getOne(indice:any){
    return this.http.get<Categoria>(this.urlBase+'/'+indice)
  }
  create(info:Categoria){
    console.log(info)
    return this.http.post<Categorias>(this.urlBase,info)
  } 
  delete(indice:any){
    return this.http.delete<Categorias>(this.urlBase+'/'+indice)
  }
  update(indice:any, info: Categoria){
    return this.http.put<Categorias>(this.urlBase+'/'+indice, info)
  }
}
