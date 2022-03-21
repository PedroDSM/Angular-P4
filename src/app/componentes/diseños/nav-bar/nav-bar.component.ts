import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: '././nav-bar.component.html',
  styleUrls: ['././nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private peticion: PeticionesService,private cookieService:CookieService, private router: Router) { }
  ngOnInit(): void {
  }
 logout(){
  this.peticion.logout().subscribe(
    respuesta =>{
        alert(respuesta.mensaje)
        this.cookieService.deleteAll();


        this.router.navigateByUrl('/login');
        
    },
    error=>{
      alert(error.error.error)
    })
 }
}
