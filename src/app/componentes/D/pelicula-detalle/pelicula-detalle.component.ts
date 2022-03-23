import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Pelicula, Categoria, Clasificacion, Comentario } from 'src/app/Models/Pemodel'
import { PeliculasService } from 'src/app/peticiones/peliculas.service';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import { TokenService } from 'src/app/peticiones/token.service';
import { interval, TimeInterval, timer } from 'rxjs';

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
export class PeliculaDetalleComponent implements OnInit,OnDestroy {
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
  comentario:Comentario={}
  constructor(private peticion: PeliculasService,private router: Router,private t: TokenService,private categoriasPet: CategoriasService, private clasifPet: ClasificacionesService,private activatedRouter: ActivatedRoute,public detectorCambios:ChangeDetectorRef,) {
   }
   getpeli(id: any){
    this.id= id
    this.peticion.getOne(id).subscribe(
      respuesta=>{
        this.Peli = respuesta.pelicula!
        this.Cat = respuesta.pelicula!.categoria!
        this.Cla = respuesta.pelicula!.clasificacion!
        // this.coments= respuesta.comentarios!.comentarios!
        // console.log(respuesta.pelicula!)
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
    ngAfterViewInit(){ 
      this.detectorCambios.detectChanges()
    }

  contador = interval(5000).subscribe((data)=>{
    // console.log('Cada '+data+ 'segundos')
  this.peticion.getOne(this.id).subscribe(
        respuesta=>{
          if(respuesta.comentarios==null){
            return this.contador.unsubscribe()
          }
          
          this.coments= respuesta.comentarios!.comentarios!
            // console.log(respuesta.pelicula!)
          })
  })
  inte:any
  ngOnInit() {
      this.clasifPet.getAll().subscribe(respuesta =>{this.clasificaciones = respuesta.clasificaciones!});
      this.categoriasPet.getAll().subscribe(respuesta =>{this.categorias = respuesta.categorias!});
      this.activatedRouter.params.subscribe(
        params=>{
                this.getpeli(params['id'])
        }) 
      setTimeout(()=>{
          this.validarBoton()
          this.contador
    })
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
  ngOnDestroy(){
    this.contador.unsubscribe()
    console.log('Se destruye')
    
    clearInterval()
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
   this.comentario.comentario = comentarioAEliminar
   
   this.peticion.EliminarComentario(this.comentario,this.id ).subscribe(
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
