import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Pelicula, Peliculas, Categoria, Clasificacion } from '../Models/Pemodel';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
    }
    token = this.cookieService.get('token')
    urlBase = 'http://127.0.0.1:3333/peliculas'
  
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  getAll(){
    return this.http.get<Peliculas>(this.urlBase, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Pelicula>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:Pelicula){
    return this.http.post<Peliculas>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Pelicula>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: Pelicula){
    return this.http.put<Peliculas>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
