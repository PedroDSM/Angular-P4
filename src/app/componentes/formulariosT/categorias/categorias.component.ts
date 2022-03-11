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
import { Categoria } from 'src/app/Models/Cmodel';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
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
export class CategoriasComponent implements OnInit {

  ca:Categoria = {
    nombre: "",
  };

  error = false

  constructor(private peticion: CategoriasService, private router: Router) { }

  ngOnInit(): void {
  }
  send(){

    this.peticion.create(this.ca).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LCA');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })

  }
}
