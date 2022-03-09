import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormularioActoresComponent } from './formulario-actores/formulario-actores.component';
import { FormularioClasificacionesComponent } from './formulario-clasificaciones/formulario-clasificaciones.component';
import { FormularioDirectoresComponent } from './formulario-directores/formulario-directores.component';
import { FormularioIdiomasComponent } from './formulario-idiomas/formulario-idiomas.component';
import { FormularioPeliculasComponent } from './formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './formulario-productoras/formulario-productoras.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './lista-clasificaciones/lista-clasificaciones.component';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaProductorasComponent } from './lista-productoras/lista-productoras.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaIdiomasComponent } from './lista-idiomas/lista-idiomas.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'FCA', component: CategoriasComponent},
  { path: 'FA', component: FormularioActoresComponent },
  { path: 'FC', component: FormularioClasificacionesComponent },
  { path: 'FD', component: FormularioDirectoresComponent },
  { path: 'FI', component: FormularioIdiomasComponent },
  { path: 'FP', component: FormularioPeliculasComponent },
  { path: 'FPR', component: FormularioProductorasComponent },
  { path: 'LA', component: ListaActoresComponent },
  { path: 'LC', component: ListaClasificacionesComponent },
  { path: 'LD', component: ListaDirectoresComponent },
  { path: 'LU', component: ListaUsuariosComponent },
  { path: 'LP', component: ListaPeliculasComponent },
  { path: 'LPR', component: ListaProductorasComponent },
  { path: 'LCA', component: ListaCategoriasComponent },
  { path: 'LI', component: ListaIdiomasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
