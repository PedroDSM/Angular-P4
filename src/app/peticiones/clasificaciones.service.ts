import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Clasificacion, Clasificaciones, Respuesta } from '../Models/Clmodel';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService {
  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
    }
    token = this.cookieService.get('token')

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  urlBase = 'http://127.0.0.1:3333/clasificaciones'
getAll(){
  return this.http.get<Respuesta>(this.urlBase, {headers:this.header})
}
getOne(indice:any){
  return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
}
create(info:Clasificacion){
  console.log(info)
  return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
}
delete(indice:any){
  return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
}
update(indice:any, info: Clasificacion){
  return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
}
}
