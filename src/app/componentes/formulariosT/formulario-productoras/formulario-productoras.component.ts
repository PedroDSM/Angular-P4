import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Productora} from 'src/app/Models/Prmodel';
import { ProductorasService } from 'src/app/peticiones/productoras.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-productoras',
  templateUrl: './formulario-productoras.component.html',
  styleUrls: ['./formulario-productoras.component.css'],
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
export class FormularioProductorasComponent implements OnInit {

  pro:Productora ={
    nombre:"",
    presidente:"",
    propietario:"",
    sitio_web:"",
  };
  error = false

  constructor(private peticion: ProductorasService, private router: Router) { }

  ngOnInit(): void {
  }
  send(){

    this.peticion.create(this.pro).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LPR');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })

  }
}
