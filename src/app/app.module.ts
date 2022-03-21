import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/diseños/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/diseños/footer/footer.component';
import { LoginComponent } from './componentes/formulariosT/login/login.component';
import { RegisterComponent } from './componentes/formulariosT/register/register.component';
import { FormularioActoresComponent } from './componentes/formulariosT/formulario-actores/formulario-actores.component';
import { FormularioPeliculasComponent } from './componentes/formulariosT/formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './componentes/formulariosT/formulario-productoras/formulario-productoras.component';
import { FormularioIdiomasComponent } from './componentes/formulariosT/formulario-idiomas/formulario-idiomas.component';
import { FormularioClasificacionesComponent } from './componentes/formulariosT/formulario-clasificaciones/formulario-clasificaciones.component';
import { InicioComponent } from './componentes/diseños/inicio/inicio.component';
import { CategoriasComponent } from './componentes/formulariosT/categorias/categorias.component';
import { ListaDirectoresComponent } from './componentes/listasT/lista-directores/lista-directores.component';
import { ListaActoresComponent } from './componentes/listasT/lista-actores/lista-actores.component';
import { ListaPeliculasComponent } from './componentes/listasT/lista-peliculas/lista-peliculas.component';
import { ListaProductorasComponent } from './componentes/listasT/lista-productoras/lista-productoras.component';
import { ListaCategoriasComponent } from './componentes/listasT/lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './componentes/listasT/lista-clasificaciones/lista-clasificaciones.component';
import { ListaIdiomasComponent } from './componentes/listasT/lista-idiomas/lista-idiomas.component';
import { DetallesComponent } from './componentes/D/detalles/detalles.component';
import { IdiomasDetalleComponent } from './componentes/D/idiomas-detalle/idiomas-detalle.component';
import { ClasificacionDetalleComponent } from './componentes/D/clasificacion-detalle/clasificacion-detalle.component';
import { CategoriaDetalleComponent } from './componentes/D/categoria-detalle/categoria-detalle.component';
import { ProductoraDetalleComponent } from './componentes/D/productora-detalle/productora-detalle.component';
import { ActorDetalleComponent } from './componentes/D/actor-detalle/actor-detalle.component';
import { PeliculaDetalleComponent } from './componentes/D/pelicula-detalle/pelicula-detalle.component';
import { DesactivarCuentaComponent } from './componentes/diseños/desactivar-cuenta/desactivar-cuenta.component';
import { ErrorComponent } from './componentes/diseños/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FormularioActoresComponent,
    FormularioPeliculasComponent,
    FormularioProductorasComponent,
    FormularioIdiomasComponent,
    FormularioClasificacionesComponent,
    InicioComponent,
    CategoriasComponent,
    ListaDirectoresComponent,
    ListaActoresComponent,
    ListaPeliculasComponent,
    ListaProductorasComponent,
    ListaCategoriasComponent,
    ListaClasificacionesComponent,
    ListaIdiomasComponent,
    DetallesComponent,
    IdiomasDetalleComponent,
    ClasificacionDetalleComponent,
    CategoriaDetalleComponent,
    ProductoraDetalleComponent,
    ActorDetalleComponent,
    PeliculaDetalleComponent,
    DesactivarCuentaComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
