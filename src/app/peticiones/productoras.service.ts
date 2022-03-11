import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Productora, Productoras } from '../Models/Prmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductorasService {
  public Productoras: any = []
  constructor(private http: HttpClient) {
  console.log('Servicio funcionando');
}
urlBase = 'http://127.0.0.1:3333/productoras'
getAll(){
  return this.http.get<Productoras>(this.urlBase)
}
getOne(indice:any){
  return this.http.get<Productora>(this.urlBase+'/'+indice)
}
create(info:Productora){
  console.log(info)
  return this.http.post<Productoras>(this.urlBase,info)
} 
delete(indice:any){
  return this.http.delete<Productoras>(this.urlBase+'/'+indice)
}
update(indice:any, info: Productora){
  return this.http.put<Productoras>(this.urlBase+'/'+indice, info)
}
}
