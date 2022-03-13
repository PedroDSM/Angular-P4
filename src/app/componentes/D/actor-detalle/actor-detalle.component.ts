import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActoresService } from 'src/app/peticiones/actores.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Actor } from 'src/app/Models/Amodel'
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css'],
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
export class ActorDetalleComponent implements OnInit {
  id = 0
  public Ac: Actor = {
    nombre: '',
    f_nacimiento:'',
    nacionalidad:'',
    inicio_carrera:'',
    final_carrera:''
  }
  fecha_actual:Date|string
  error = false
  actualizar = false
  constructor(private peticion: ActoresService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getactor(params['id'])
      })
    this.fecha_actual = new Date()
    this.fecha_actual = formatDate(this.fecha_actual!, 'yyyy-MM-dd', 'en')
   }
   getactor(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Ac = respuesta.actor!
        this.Ac.inicio_carrera= respuesta.actor!.actor!.inicio_carrera
        this.Ac.final_carrera= respuesta.actor!.actor!.final_carrera
      })
  }
  modificar(){
    this.peticion.update(this.id,this.Ac).subscribe(
      respuesta=>{
          this.Ac = respuesta.actor!
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LA')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
    }
    inputs(){
      this.actualizar = !this.actualizar
      // console.log(this.Ac.final_carrera)
      this.Ac.f_nacimiento = formatDate(this.Ac.f_nacimiento!, 'yyyy-MM-dd', 'en')
      this.Ac.inicio_carrera = formatDate(this.Ac.inicio_carrera!, 'yyyy-MM-dd', 'en')
      if(this.Ac.final_carrera!=null)
        this.Ac.final_carrera = formatDate(this.Ac.final_carrera!, 'yyyy-MM-dd', 'en')
    }
  ngOnInit(): void {
  }

}
