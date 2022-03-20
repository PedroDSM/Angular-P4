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
import { TokenGuard } from './guards/token.guard';
import { PeliculaDetalleComponent } from './componentes/D/pelicula-detalle/pelicula-detalle.component';
import { DesactivarCuentaComponent } from './componentes/diseños/desactivar-cuenta/desactivar-cuenta.component';
import { ListaUsuariosComponent } from './componentes/listasT/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'status_cuenta', component: DesactivarCuentaComponent},
  { path: 'FCA', component: CategoriasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'FA', component: FormularioActoresComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'FC', component: FormularioClasificacionesComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'FI', component: FormularioIdiomasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'FP', component: FormularioPeliculasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'FPR', component: FormularioProductorasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LA', component: ListaActoresComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LC', component: ListaClasificacionesComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LD', component: ListaDirectoresComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LP', component: ListaPeliculasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LPR', component: ListaProductorasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LCA', component: ListaCategoriasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LI', component: ListaIdiomasComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LU/:id/DE', component: DetallesComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LI/:id/DI', component: IdiomasDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LC/:id/DC', component: ClasificacionDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LCA/:id/DCA', component: CategoriaDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LPR/:id/DPR', component: ProductoraDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LA/:id/DA', component: ActorDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]  },
  { path: 'LP/:id/DPE', component: PeliculaDetalleComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]   },
  { path: 'LU', component: ListaUsuariosComponent, canActivate:[TokenGuard], canDeactivate:[TokenGuard]   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
