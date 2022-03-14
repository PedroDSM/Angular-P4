import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from 'src/app/peticiones/token.service';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: '././nav-bar.component.html',
  styleUrls: ['././nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogged = false;
  constructor(private peticion: PeticionesService,private t :TokenService, private router: Router) {
    this.estado()
  }
  ngOnInit(): void {
  }
estado(){
  this.t.validar().subscribe(
    respuesta=>{
      this.isLogged = true
    },error=>{
      this.isLogged = false
    }
  )
}
 logout(){
  this.peticion.logout().subscribe(
    respuesta =>{
        this.router.navigateByUrl('/inicio');
        alert(respuesta.mensaje)
    },
    error=>{
      alert(error.error.error)
    })
    this.estado()
 }
}
