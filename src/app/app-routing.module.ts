import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/diseños/inicio/inicio.component';
import { LoginComponent } from './componentes/formulariosT/login/login.component';
import { RegisterComponent } from './componentes/formulariosT/register/register.component';
import { FormularioActoresComponent } from './componentes/formulariosT/formulario-actores/formulario-actores.component';
import { FormularioClasificacionesComponent } from './componentes/formulariosT/formulario-clasificaciones/formulario-clasificaciones.component';
import { FormularioIdiomasComponent } from './componentes/formulariosT/formulario-idiomas/formulario-idiomas.component';
import { FormularioPeliculasComponent } from './componentes/formulariosT/formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './componentes/formulariosT/formulario-productoras/formulario-productoras.component';
import { ListaActoresComponent } from './componentes/listasT/lista-actores/lista-actores.component';
import { ListaCategoriasComponent } from './componentes/listasT/lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './componentes/listasT/lista-clasificaciones/lista-clasificaciones.component';
import { ListaDirectoresComponent } from './componentes/listasT/lista-directores/lista-directores.component';
import { ListaProductorasComponent } from './componentes/listasT/lista-productoras/lista-productoras.component';
import { ListaPeliculasComponent } from './componentes/listasT/lista-peliculas/lista-peliculas.component';
import { ListaIdiomasComponent } from './componentes/listasT/lista-idiomas/lista-idiomas.component';
import { CategoriasComponent } from './componentes/formulariosT/categorias/categorias.component';
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
