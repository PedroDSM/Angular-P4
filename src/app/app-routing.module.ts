import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { FormularioActoresComponent } from './componentes/formulario-actores/formulario-actores.component';
import { FormularioClasificacionesComponent } from './componentes/formulario-clasificaciones/formulario-clasificaciones.component';
import { FormularioIdiomasComponent } from './componentes/formulario-idiomas/formulario-idiomas.component';
import { FormularioPeliculasComponent } from './componentes/formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './componentes/formulario-productoras/formulario-productoras.component';
import { ListaActoresComponent } from './componentes/lista-actores/lista-actores.component';
import { ListaCategoriasComponent } from './componentes/lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './componentes/lista-clasificaciones/lista-clasificaciones.component';
import { ListaDirectoresComponent } from './componentes/lista-directores/lista-directores.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ListaProductorasComponent } from './componentes/lista-productoras/lista-productoras.component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { ListaIdiomasComponent } from './componentes/lista-idiomas/lista-idiomas.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { DetallesComponent } from './componentes/D/detalles/detalles.component';
import { IdiomasDetalleComponent } from './componentes/D/idiomas-detalle/idiomas-detalle.component';
import { ClasificacionDetalleComponent } from './componentes/D/clasificacion-detalle/clasificacion-detalle.component';
import { CategoriaDetalleComponent } from './componentes/D/categoria-detalle/categoria-detalle.component';
import { ProductoraDetalleComponent } from './componentes/D/productora-detalle/productora-detalle.component';
import { ActorDetalleComponent } from './componentes/D/actor-detalle/actor-detalle.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'FCA', component: CategoriasComponent},
  { path: 'FA', component: FormularioActoresComponent },
  { path: 'FC', component: FormularioClasificacionesComponent },
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
  { path: 'LI', component: ListaIdiomasComponent },
  { path: 'LU/:id/DE', component: DetallesComponent },
  { path: 'LI/:id/DI', component: IdiomasDetalleComponent },
  { path: 'LC/:id/DC', component: ClasificacionDetalleComponent},
  { path: 'LCA/:id/DCA', component: CategoriaDetalleComponent},
  { path: 'LPR/:id/DPR', component: ProductoraDetalleComponent},
  { path: 'LA/:id/DA', component: ActorDetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
