import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Idiomas, Idioma, Respuesta } from '../Models/Imodel';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
  }
    token = this.cookieService.get('token')

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  urlBase = 'http://127.0.0.1:3333/idiomas'
  getAll(){
    return this.http.get<Respuesta>(this.urlBase, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:Idioma){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: Idioma){
    return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
