import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Cmodel';
import { Pelicula, Respuesta } from 'src/app/Models/Pemodel';
import { CategoriasService } from 'src/app/peticiones/categorias.service';
import { ClasificacionesService } from 'src/app/peticiones/clasificaciones.service';
import { PeliculasService } from 'src/app/peticiones/peliculas.service';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {
    // fecha_actual:Date|string
  categorias: any =[]
  clasificaciones: any =[]
  pelicula_nueva: Pelicula ={
    nombre:        '',
    descripcion:   '',
    duracion:      0,
    calificacion:  0,
    categoria_id:     null,
    clasificacion_id: null
  }
  error= false;


  constructor(private categoriasPet: CategoriasService, private clasifPet: ClasificacionesService, private peticion: PeliculasService, private router: Router) {
    this.categoriasPet.getAll().subscribe(respuesta=>{this.categorias = respuesta.categorias!});
    this.clasifPet.getAll().subscribe(respuesta=>{this.clasificaciones = respuesta.clasificaciones!});
  }
 
  ngOnInit(): void {
  }
  enviar(){
    this.peticion.create(this.pelicula_nueva).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/LP');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        console.log(error)
        alert("Ha habido un error al procesar la solicitud")
      })
  }

}

// import { formatDate } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { Router } from 'angular-routing';
// import { Categorias } from 'src/app/Models/Cmodel';
// import { CategoriasService } from 'src/app/peticiones/categorias.service';

// @Component({
//   selector: 'app-formulario-peliculas',
//   templateUrl: './formulario-peliculas.component.html',
//   styleUrls: ['./formulario-peliculas.component.css']
// })
// export class FormularioPeliculasComponent implements OnInit {

//   constructor(private peticion: CategoriasService, private router: Router) {
//     // this.fecha_actual  =this.user.f_nacimiento = new Date()
//     // this.user.f_nacimiento = this.fecha_actual = formatDate(this.fecha_actual!, 'yyyy-MM-dd', 'en')

//     // this.peticion.getAll().subscribe(respuesta=>{
//     //   this.categorias = respuesta.categorias!
//     // });
//    }

//   ngOnInit(): void {
//   }

// }
