import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Respuesta, User } from '../Models/Umodel';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public usuarios: any = []
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  urlBase = 'http://127.0.0.1:3333/'
  urlusers = this.urlBase+'usuarios'
  logi = this.urlBase+'login'
  getAll(){
    return this.http.get<Respuesta>(this.urlusers)
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlusers+'/'+indice)
  }
  create(info:User){
    console.log(info)
    return this.http.post<Respuesta>(this.urlusers,info)
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(this.urlusers+'/'+indice)
  }
  update(indice:any, info: User){
    return this.http.put<Respuesta>(this.urlusers+'/'+indice, info)
  }

  login(info: User){
    return this.http.post<Respuesta>(this.logi, info)
  }
}
