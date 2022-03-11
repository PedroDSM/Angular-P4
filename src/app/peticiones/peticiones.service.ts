import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Respuesta1, Respuesta0, User2, User3 } from '../Models/Umodel';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public usuarios: any = []
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  urlBase = 'http://127.0.0.1:3333/usuarios'
  getAll(){
    return this.http.get<Respuesta0>(this.urlBase)
  }
  getOne(indice:any){
    return this.http.get<Respuesta1>(this.urlBase+'/'+indice)
  }
  create(info:User2){
    console.log(info)
    return this.http.post<Respuesta1>(this.urlBase,info)
  } 
  delete(indice:any){
    return this.http.delete<Respuesta1>(this.urlBase+'/'+indice)
  }
  update(indice:any, info: User3){
    return this.http.put<Respuesta1>(this.urlBase+'/'+indice, info)
  }
}
