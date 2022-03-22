import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Clasificacion} from 'src/app/Models/Clmodel'
import { TokenService } from 'src/app/peticiones/token.service';
@Component({
  selector: 'app-clasificacion-detalle',
  templateUrl: './clasificacion-detalle.component.html',
  styleUrls: ['./clasificacion-detalle.component.css'],
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
export class ClasificacionDetalleComponent implements OnInit {
  id = 0
  public Cla: Clasificacion = {
    nombre: '',
    edad_minima:'',
    descripcion:'',
  }
  error = false
  actualizar = false
  constructor(private peticion: ClasificacionesService,private t: TokenService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getClasificacion(params['id'])
      })
   }
   getClasificacion(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Cla = respuesta.clasificacion!
      })
  }
  modificar(){
    this.peticion.update(this.id,this.Cla).subscribe(
      respuesta=>{
          this.Cla = respuesta.clasificacion!
          alert(respuesta.mensaje!)
          this.router.navigateByUrl('/LC')
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
    this.validarBoton()
  }

  formularios :any
  validarBoton(){
   this.t.validar().subscribe(respuesta=>{
     this.formularios = respuesta.rol
   })
  }
}
