import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Clasificacion, Clasificaciones, Respuesta } from '../Models/Clmodel';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService {
  constructor(private http: HttpClient, private cookieService:CookieService) {
    // console.log('Servicio funcionando');
    }
    token = this.cookieService.get('token')

    header = new HttpHeaders().
    append('Content-Type', 'application/json').
    append('Authorization', `Bearer ${this.token}`)
  urlBase = environment.urlbase+'/clasificaciones'
  getAll(){
    let header = new HttpHeaders().
    append('Content-Type', 'application/json').
    append('Authorization', `Bearer ${this.token}`)
    return this.http.get<Respuesta>(this.urlBase, {headers:header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:Clasificacion){
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: Clasificacion){
    return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
