import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/peticiones/idiomas.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-lista-idiomas',
  templateUrl: './lista-idiomas.component.html',
  styleUrls: ['./lista-idiomas.component.css'],
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
export class ListaIdiomasComponent implements OnInit {
  public idiomas: any = []
  error = false
  constructor(private peticion: IdiomasService, private router: Router) { }

  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.idiomas = respuesta.idiomas
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LI/'+id+'/DI');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.idiomas = respuesta.idioma
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LI')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }
}
