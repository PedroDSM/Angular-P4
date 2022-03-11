import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/peticiones/peticiones.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
  public usuarios: any = []
  error = false
  constructor(private peticion: PeticionesService, private router: Router) { }
  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.usuarios = respuesta.usuario
      });
    // console.log(this.usuarios)
  }
  leer(id:any){
    this.router.navigateByUrl('LU/'+id+'/DE');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.usuarios = respuesta.usuario
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LU')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
}
