import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
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
export class ListaUsuariosComponent implements OnInit {

  constructor(private peticion: PeticionesService) { }
  users:any
  ngOnInit(): void {
    this.leeerLista()
  }
  leeerLista(){
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.users = respuesta.usuarios!
      });
  }
  cambiarEstado(id:any){
    this.peticion.cambiarRol(id).subscribe(respuesta=>{
      alert(respuesta.mensaje)
      this.leeerLista()
    },
      error=>{
        alert(error.error.error)
      })
  }
}
