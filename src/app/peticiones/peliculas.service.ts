import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

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
    return this.http.get<any>(this.urlBase, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<any>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:any){
    console.log(info)
    return this.http.post<any>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<any>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: any){
    return this.http.put<any>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
}
