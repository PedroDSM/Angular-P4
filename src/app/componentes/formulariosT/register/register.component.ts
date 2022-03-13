import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-register',
  templateUrl: '././register.component.html',
  styleUrls: ['././register.component.css'],
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
export class RegisterComponent implements OnInit {

  user:User = {
    nombre: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    f_nacimiento: "",
    nacionalidad: "",
  };

  error = false

  constructor(private peticion: PeticionesService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){

    this.peticion.create(this.user).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/inicio');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert(error.error.error)
      })

  }

}
