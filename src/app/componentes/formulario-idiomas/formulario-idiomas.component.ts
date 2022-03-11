import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Idioma} from 'src/app/Models/Imodel';
import { IdiomasService } from 'src/app/peticiones/idiomas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-idiomas',
  templateUrl: './formulario-idiomas.component.html',
  styleUrls: ['./formulario-idiomas.component.css'],
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
export class FormularioIdiomasComponent implements OnInit {

  idi:Idioma ={
    nombre:"",
  };
  error = false

  constructor(private peticion: IdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  send(){

    this.peticion.create(this.idi).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LI');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })

  }

}
