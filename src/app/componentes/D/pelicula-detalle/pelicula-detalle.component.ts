import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Pelicula, Categoria, Clasificacion, Papeles, Idioma, Productora } from 'src/app/Models/Pemodel'
import { PeliculasService } from 'src/app/peticiones/peliculas.service';
import { ActoresService } from 'src/app/peticiones/actores.service';
import { IdiomasService } from 'src/app/peticiones/idiomas.service';
import { ProductorasService } from 'src/app/peticiones/productoras.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css'],
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
export class PeliculaDetalleComponent implements OnInit {

  id = 0
  public Peli: Pelicula = {}
  public Cat:Categoria ={}
  public Cla:Clasificacion = {}
  // public pap:Papeles[]=[]
  // public idiomas: Idioma[] =[]
  // public productoras: Productora[] =[]
  // public idiomaS: any
  // public productoraS: any
  // public papelS: any
  // public listIdiomas: any
  // public listActors: any
  // public listProductoras: any
  error = false
  actualizar = false
  constructor(private peticion: PeliculasService, 
    // private actsPet: ActoresService,
    // private idioPet: IdiomasService,
    // private prodPet: ProductorasService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(
      params=>{
        this.getpeli(params['id'])
      })
   }
   getpeli(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Peli = respuesta.pelicula!
        this.Cat = respuesta.pelicula!.categoria!
        this.Cla = respuesta.pelicula!.clasificacion!
        // this.pap = respuesta.pelicula!.papeles!
        // this.idiomas = respuesta.pelicula!.idioma!
        // this.productoras = respuesta.pelicula!.productora!
        console.log(respuesta.pelicula!)
      })
  }
  modificar(){
    this.peticion.update(this.id,this.Peli).subscribe(
      respuesta=>{
          this.Peli = respuesta.pelicula!
          alert(respuesta.mensaje)
          this.router.navigateByUrl('/LP')
      },
      error=>{
        this.error = true
        alert("Ha habido un error al procesar la solicitud")
      })
    }
    inputs(){
      this.actualizar = !this.actualizar
      
    // this.actsPet.getAll().subscribe(respuesta=>{this.listActors = respuesta.actores});
    // this.idioPet.getAll().subscribe(respuesta=>{this.listIdiomas = respuesta.idiomas});
    // this.prodPet.getAll().subscribe(respuesta=>{this.listProductoras= respuesta.productoras});
    }
  ngOnInit(): void {
  }
  agregarIdioma(){

  }
  agregarActor(){
    
  }
  agregarProductora(){
    
  }
  eliminarIdioma(){

  }
  eliminarActor(){
    
  }
  eliminarProductora(){
    
  }

}
