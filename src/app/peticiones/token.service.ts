import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { User } from '../Models/Umodel';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token='x'
  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
  }

  urlBase = environment.urlbase+'/verificar_token'


  validar(){
    this.token = this.cookieService.get('token')
    let header = new HttpHeaders().
    append('Content-Type', 'application/json').
    append('Authorization', `Bearer ${this.token}`)
    return this.http.get<User>(this.urlBase, {headers:header})
  }

}
