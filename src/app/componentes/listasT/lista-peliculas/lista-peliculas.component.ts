import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/peticiones/peliculas.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css'],
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
export class ListaPeliculasComponent implements OnInit {

  public peliculas: any = []
  error = false
  constructor(private peticion: PeliculasService, private router: Router) { }

  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.peliculas = respuesta.pelicula
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LP/'+id+'/DPE');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.peliculas = respuesta.pelicula
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LP')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
}
