import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductorasService } from 'src/app/peticiones/productoras.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Productora } from 'src/app/Models/Prmodel'
@Component({
  selector: 'app-productora-detalle',
  templateUrl: './productora-detalle.component.html',
  styleUrls: ['./productora-detalle.component.css'],
  animations: [
    trigger("ArribaAbajo", [
      state("void", style({
        transform: "translateY(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
  ],
})
export class ProductoraDetalleComponent implements OnInit {
  id = 0
  public PR: Productora = {
    nombre: '',
    presidente:'',
    propietario:'',
    sitio_web:','
  }
  error = false
  actualizar = false
  constructor(private peticion: ProductorasService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getproductora(params['id'])
      })
   }
   getproductora(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.PR = respuesta.productora
      })
  }
  modificar(){
    this.peticion.update(this.id,this.PR).subscribe(
      respuesta=>{
          this.PR = respuesta.productoras
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LPR')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
    }
    inputs(){
      this.actualizar = !this.actualizar
    }
  ngOnInit(): void {
  }

}
