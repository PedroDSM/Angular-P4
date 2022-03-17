import { Component, OnInit } from '@angular/core';
import { ProductorasService } from 'src/app/peticiones/productoras.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-lista-productoras',
  templateUrl: './lista-productoras.component.html',
  styleUrls: ['./lista-productoras.component.css'],
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
export class ListaProductorasComponent implements OnInit {
  public productoras: any = []
  error = false
  constructor(private peticion: ProductorasService, private router: Router) {
    this.leeerLista()
  }

  ngOnInit(): void {
  }
  leeerLista(){
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.productoras = respuesta.productoras
      });
  }
  leer(id:any){
    this.router.navigateByUrl('LPR/'+id+'/DPR');
  }
  eliminar(id:number){
    this.peticion.delete(id).subscribe(
      respuesta=>{
          this.productoras = respuesta.productora
          alert(respuesta.mensaje)
          this.leeerLista()
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
  }

}
