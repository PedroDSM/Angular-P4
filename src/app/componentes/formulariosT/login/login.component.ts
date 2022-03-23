import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { User } from 'src/app/Models/Umodel';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger("Aparecer", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(1000, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
  ],
})


export class LoginComponent implements OnInit {

  user:User={}
  constructor(private peticion: PeticionesService,private cookieService:CookieService, private router: Router, public detectorCambios:ChangeDetectorRef) { }


  ngAfterViewInit(){ 
    this.detectorCambios.detectChanges()
  }

  ngOnInit() {
    setTimeout(()=>{

    })
}

  send(){

    this.peticion.login(this.user).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/inicio');

          this.cookieService.set('token',respuesta.token!.token!,4,'/')
          this.router.navigate(['/inicio']);
          alert(respuesta.mensaje)
      },
      error=>{
        alert(error.error.error)
      })

  }
}
