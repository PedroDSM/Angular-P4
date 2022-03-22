import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Categoria} from 'src/app/Models/Cmodel'
import { TokenService } from 'src/app/peticiones/token.service';
@Component({
  selector: 'app-categoria-detalle',
  templateUrl: './categoria-detalle.component.html',
  styleUrls: ['./categoria-detalle.component.css'],
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
export class CategoriaDetalleComponent implements OnInit {
  id = 0
  public Cat: Categoria = {
    nombre: '',
  }
  error = false
  actualizar = false
  constructor(private peticion: CategoriasService,private t: TokenService, private router: Router,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params=>{
        this.getcategoria(params['id'])
      })
   }
   getcategoria(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Cat = respuesta.categoria!
      })
  }
  modificar(){
    this.peticion.update(this.id,this.Cat).subscribe(
      respuesta=>{
          this.Cat = respuesta.categoria!
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LCA')
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
