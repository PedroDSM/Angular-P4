import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token='x'
  constructor(private http: HttpClient, private cookieService:CookieService) {
    console.log('Servicio funcionando');
  }

  urlBase = 'http://127.0.0.1:3333/verificar_token'


  validar(){
    this.token = this.cookieService.get('token')
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(this.urlBase, {headers:header})
  }

}
