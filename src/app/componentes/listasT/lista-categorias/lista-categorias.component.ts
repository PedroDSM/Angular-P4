import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TokenService } from 'src/app/peticiones/token.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css'],
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
export class ListaCategoriasComponent implements OnInit {
  public categorias: any = []
  error = false
  constructor(private peticion: CategoriasService,private t: TokenService, private router: Router) { }


  ngOnInit(): void {
    this.leeerLista()
    this.validarBoton()
  }
  leeerLista(){
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.categorias = respuesta.categorias
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LCA/'+id+'/DCA');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.categorias = respuesta.categoria
          alert(respuesta.mensaje)
          this.leeerLista()
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
  
formularios :any
validarBoton(){
 this.t.validar().subscribe(respuesta=>{
   this.formularios = respuesta.rol
 })
}
}
