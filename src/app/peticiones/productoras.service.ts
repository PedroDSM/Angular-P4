import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Productora, Productoras, Respuesta } from '../Models/Prmodel';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductorasService {
  constructor(private http: HttpClient, private cookieService:CookieService) {
  // console.log('Servicio funcionando');
  }
  token = this.cookieService.get('token')

  urlBase = environment.urlbase+'/productoras'

  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization', `Bearer ${this.token}`)

  getAll(){
    return this.http.get<Respuesta>(this.urlBase, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:Productora){
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: Productora){
    return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
