import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { User } from 'src/app/Models/Umodel';
import { TokenService } from 'src/app/peticiones/token.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
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
export class DetallesComponent implements OnInit {
  id = 0
  public usuario: User = {
    nombre: '',
    email: '',
    username: '',
    f_nacimiento: '',
    nacionalidad: ''
  }
  error = false
  actualizar = false
  constructor(private peticion: PeticionesService,private t: TokenService, private router: Router,private activatedRouter: ActivatedRoute) {
    
    this.t.validar().subscribe(respuesta=>{
      this.getusuario(respuesta.id!)
    })
  }

  getusuario(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.usuario = respuesta.usuario!
      })
  }

  modificar(){
    this.peticion.update(this.id,this.usuario).subscribe(
      respuesta=>{
          this.usuario = respuesta.usuario!
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LU')
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
