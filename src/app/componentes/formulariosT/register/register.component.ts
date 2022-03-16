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
import { formatDate } from '@angular/common';

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
    rol: "USER",
    password_confirmation: "",
    f_nacimiento: "",
    nacionalidad: "",
  };

  error = false
  fecha_actual:Date|string

  constructor(private peticion: PeticionesService, private router: Router) {
    this.fecha_actual  =this.user.f_nacimiento = new Date()
    this.user.f_nacimiento = this.fecha_actual = formatDate(this.fecha_actual!, 'yyyy-MM-dd', 'en')
  }

  ngOnInit(): void {
  }

  send(){

    this.peticion.create(this.user).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LU');
          this.router.navigate(['/login']);
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert(error.error.error)
      })

  }

}
