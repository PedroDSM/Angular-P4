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
import { Clasificacion } from 'src/app/Models/Clmodel';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-clasificaciones',
  templateUrl: './formulario-clasificaciones.component.html',
  styleUrls: ['./formulario-clasificaciones.component.css'],
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
export class FormularioClasificacionesComponent implements OnInit {
  clas:Clasificacion = {
    nombre: "",
    descripcion: "",
    edad_minima: "",
  };

  error = false

  constructor(private peticion: ClasificacionesService, private router: Router) { }

  ngOnInit(): void {
  }
  send(){

    this.peticion.create(this.clas).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LC');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })

  }

}
