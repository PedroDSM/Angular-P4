import { ActivatedRoute, Router } from '@angular/router';
import { IdiomasService } from 'src/app/peticiones/idiomas.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Idioma} from 'src/app/Models/Imodel'
;import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/peticiones/token.service';

@Component({
  selector: 'app-idiomas-detalle',
  templateUrl: './idiomas-detalle.component.html',
  styleUrls: ['./idiomas-detalle.component.css'],
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
export class IdiomasDetalleComponent implements OnInit {
  id = 0
  public Idi: Idioma = {
    nombre: '',
  }
  error = false
  actualizar = false
  constructor(private peticion: IdiomasService,private t: TokenService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getidioma(params['id'])
      })
   }
   getidioma(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Idi = respuesta.idioma!
      })
  }
  modificar(){
    this.peticion.update(this.id,this.Idi).subscribe(
      respuesta=>{
          this.Idi = respuesta.idioma!
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LI')
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
 