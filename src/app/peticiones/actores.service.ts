import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Actor, Respuesta } from '../Models/Amodel';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient, private cookieService:CookieService) {
  // console.log('Servicio funcionando');
  
    this.token = this.cookieService.get('token')
  }
  
  token = this.cookieService.get('token')
  urlBase = environment.urlbase+'/actores'
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization', `Bearer ${this.token}`)

  getAll(){
    
    let token = this.cookieService.get('token')
    let header = new HttpHeaders().
    append('Content-Type', 'application/json').
    append('Authorization', `Bearer ${token}`)
    return this.http.get<Respuesta>(this.urlBase, {headers:header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:Actor){
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: Actor){
    return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
