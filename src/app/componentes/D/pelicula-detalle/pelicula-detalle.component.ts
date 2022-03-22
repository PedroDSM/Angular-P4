import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Pelicula, Categoria, Clasificacion, Papeles, Idioma, Productora, Comentario } from 'src/app/Models/Pemodel'
import { PeliculasService } from 'src/app/peticiones/peliculas.service';
import { ActoresService } from 'src/app/peticiones/actores.service';
import { IdiomasService } from 'src/app/peticiones/idiomas.service';
import { ProductorasService } from 'src/app/peticiones/productoras.service';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import { TokenService } from 'src/app/peticiones/token.service';

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
  formularios :any
  id = 0
  public Peli: Pelicula = {}
  public Cat:Categoria ={}
  public Cla:Clasificacion = {}
  public coments: any
  clasificaciones :any
  categorias:any
  error = false
  actualizar = false
  coment : Comentario ={}

  constructor(private peticion: PeliculasService,
    private router: Router,
    private t: TokenService,
    private categoriasPet: CategoriasService, 
    private clasifPet: ClasificacionesService,
    private activatedRouter: ActivatedRoute) {
      this.clasifPet.getAll().subscribe(respuesta =>{this.clasificaciones = respuesta.clasificaciones!});
      this.categoriasPet.getAll().subscribe(respuesta =>{this.categorias = respuesta.categorias!});
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
        this.coments= respuesta.comentarios!.comentarios!
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
      
    }
  ngOnInit(): void {
    this.validarBoton()
  }
  url = "../../../../assets/imagen.png" 
  imageselected(e:any){
    if(e.target.files){
      var mostrar = new FileReader();
      mostrar.readAsDataURL(e.target.files[0]);
      mostrar.onload = (event:any)=>{
        this.url = event.target.result;
      }
    }

  }
  comentar(){
    this.peticion.Comentar(this.coment ,this.id ).subscribe(
      respuesta=>{
        this.getpeli(this.id)
        alert('Comentario creado correctamente')
        this.coment.comentario = ''
      },
      error=>{
        this.error = true
        console.log(error)
        alert("Ha habido un error al comentar")
      })
  }
  
 validarBoton(){
  this.t.validar().subscribe(respuesta=>{
    this.formularios = respuesta.rol
  })
 }
 
 eliminarComentario(comentarioAEliminar: any){
   this.coment.comentario = comentarioAEliminar
   
   this.peticion.EliminarComentario(this.coment,this.id ).subscribe(
    respuesta=>{
      this.getpeli(this.id)
      alert('Comentario Eliminado correctamente')
      this.coment.comentario = ''
    },
    error=>{
      this.error = true
      console.log(error)
      alert("Ha habido un error al procesar la solicutud")
    })
 }
}
