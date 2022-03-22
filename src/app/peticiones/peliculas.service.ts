import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../Models/Pemodel';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
  }
    token = this.cookieService.get('token')

    header = new HttpHeaders().
    append('Content-Type', 'application/json').
    append('Authorization', `Bearer ${this.token}`)
  urlBase = environment.urlbase+'/peliculas'
  
  getAll(){
    return this.http.get<Respuesta>(this.urlBase, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  create(info:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlBase+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: any){
    return this.http.put<Respuesta>(this.urlBase+'/'+indice, info, {headers:this.header})
  }
  
  Aactor(info:any,indice:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase+'/'+indice+'/agregar_papel',info, {headers:this.header})
  }
  
  Aidioma(info:any,indice:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase+'/'+indice+'/agregar_idioma',info, {headers:this.header})
  }
  
  Aproductora(info:any,indice:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase+'/'+indice+'/agregar_productora',info, {headers:this.header})
  }
  
  Eactor(info:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  Eidioma(info:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  Eproductora(info:any){
    console.log(info)
    return this.http.post<Respuesta>(this.urlBase,info, {headers:this.header})
  }
  
  Comentar(info:any,indice:any){
    return this.http.post<Respuesta>(this.urlBase+'/'+indice+'/comentar',info, {headers:this.header})
  }
  EliminarComentario(info:any,indice:any){
    return this.http.post<Respuesta>(this.urlBase+'/'+indice+'/eliminar_comentario',info, {headers:this.header})
  }
}
