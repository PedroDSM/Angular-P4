import { Component, OnInit } from '@angular/core';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-lista-clasificaciones',
  templateUrl: './lista-clasificaciones.component.html',
  styleUrls: ['./lista-clasificaciones.component.css'],
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
export class ListaClasificacionesComponent implements OnInit {

  public clasificaciones: any = []
  error = false
  constructor(private peticion: ClasificacionesService, private router: Router) { }

  ngOnInit(): void {
    this.leeerLista()
  }
  leeerLista(){
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.clasificaciones = respuesta.clasificaciones
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LC/'+id+'/DC');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.clasificaciones = respuesta.clasificacion
          alert(respuesta.mensaje)
          this.leeerLista()
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
}
