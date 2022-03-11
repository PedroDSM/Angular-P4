import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Idiomas, Idioma } from '../Models/Imodel';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  public Idiomas: any = []
  constructor(private http: HttpClient) {
  console.log('Servicio funcionando');
}
urlBase = 'http://127.0.0.1:3333/idiomas'
getAll(){
  return this.http.get<Idiomas>(this.urlBase)
}
getOne(indice:any){
  return this.http.get<Idioma>(this.urlBase+'/'+indice)
}
create(info:Idioma){
  console.log(info)
  return this.http.post<Idiomas>(this.urlBase,info)
} 
delete(indice:any){
  return this.http.delete<Idiomas>(this.urlBase+'/'+indice)
}
update(indice:any, info: Idioma){
  return this.http.put<Idiomas>(this.urlBase+'/'+indice, info)
}
}
