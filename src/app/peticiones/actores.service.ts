import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Actores, Actor } from '../Models/Amodel';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  public Actores: any = []
  constructor(private http: HttpClient) {
  console.log('Servicio funcionando');
}
urlBase = 'http://127.0.0.1:3333/actores'
getAll(){
  return this.http.get<Actores>(this.urlBase)
}
getOne(indice:any){
  return this.http.get<Actor>(this.urlBase+'/'+indice)
}
create(info:Actor){
  console.log(info)
  return this.http.post<Actores>(this.urlBase,info)
} 
delete(indice:any){
  return this.http.delete<Actores>(this.urlBase+'/'+indice)
}
update(indice:any, info: Actor){
  return this.http.put<Actores>(this.urlBase+'/'+indice, info)
}
}
