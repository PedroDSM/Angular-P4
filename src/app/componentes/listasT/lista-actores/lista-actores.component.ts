import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/peticiones/actores.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css'],
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
export class ListaActoresComponent implements OnInit {

  public actors: any = []
  error = false
  constructor(private peticion: ActoresService, private router: Router) { }

  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.actors = respuesta.actores
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LA/'+id+'/DA');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.actors = respuesta.actores
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LA')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
}
