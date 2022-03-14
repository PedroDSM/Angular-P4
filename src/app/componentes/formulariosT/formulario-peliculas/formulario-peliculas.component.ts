import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { PeliculasService } from 'src/app/peticiones/peliculas.service';
import { Router } from '@angular/router';
import { Pelicula, Clasificacion, Categoria } from 'src/app/Models/Pemodel';
@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css'],
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
export class FormularioPeliculasComponent implements OnInit {

  Pe:Pelicula ={
    nombre:"",
    descripcion:"",
    duracion:"",
    calificacion:"",
    categoria_id:0,
    clasificacion_id:0,
  };
    C:Categoria = {
      nombre:"",
    }
    Cl:Clasificacion = { 
      nombre:"",
      descripcion:"",
      edad_minima:"",
    }
  error = false

  constructor(private peticion: PeliculasService, private router: Router) { }

  ngOnInit(): void {
  }
  send(){

    this.peticion.create(this.Pe).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LP');
          alert(respuesta.mensaje)
      },
      error=>{

        this.error = true
        console.log(error)
        alert("Ha habido un error al procesar la solicitud")
      })

  }

}
