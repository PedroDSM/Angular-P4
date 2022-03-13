import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ActoresService } from 'src/app/peticiones/actores.service';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Models/Amodel';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css'],
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
export class FormularioActoresComponent implements OnInit {

  ac:Actor ={
    nombre:"",
    f_nacimiento:"",
    nacionalidad:"",
    inicio_carrera:"",
    final_carrera:null,
  };
  error = false

  constructor(private peticion: ActoresService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){

    this.peticion.create(this.ac).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LA');
          alert(respuesta.mensaje)
      },
      error=>{

        this.error = true
        console.log(error)
        alert("Ha habido un error al procesar la solicitud")
      })

  }
}
