import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Clasificacion, Clasificaciones } from '../Models/Clmodel';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService {
  public clasificaciones: any = []
  constructor(private http: HttpClient) {
  console.log('Servicio funcionando');
  }
  urlBase = 'http://127.0.0.1:3333/clasificaciones'
getAll(){
  return this.http.get<Clasificaciones>(this.urlBase)
}
getOne(indice:any){
  return this.http.get<Clasificacion>(this.urlBase+'/'+indice)
}
create(info:Clasificacion){
  console.log(info)
  return this.http.post<Clasificaciones>(this.urlBase,info)
} 
delete(indice:any){
  return this.http.delete<Clasificaciones>(this.urlBase+'/'+indice)
}
update(indice:any, info: Clasificacion){
  return this.http.put<Clasificaciones>(this.urlBase+'/'+indice, info)
}
}
