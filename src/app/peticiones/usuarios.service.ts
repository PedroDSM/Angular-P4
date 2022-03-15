import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Respuesta, User } from '../Models/Umodel';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public usuarios: any = []
  token = 'x'
  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
  }
  urlusers = environment.urlbase+'/usuarios'
  logi = environment.urlbase+'/login'
  logo = environment.urlbase+'/logout'
  getAll(){
    return this.http.get<Respuesta>(this.urlusers)
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(this.urlusers+'/'+indice)
  }
  create(info:User){
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

  logout(){
    this.token = this.cookieService.get('token')
    const header = new HttpHeaders()
    .set( 'Content-Type','application/json')
    .set('Authorization', 'Bearer '+this.token)
    this.cookieService.delete("token");
    this.cookieService.deleteAll();
   return this.http.get<Respuesta>(environment.urlbase+'/logout', {headers:header})
  }
}
