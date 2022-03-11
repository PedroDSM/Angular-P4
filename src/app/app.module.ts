import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { FormularioActoresComponent } from './componentes/formulario-actores/formulario-actores.component';
import { FormularioPeliculasComponent } from './componentes/formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './componentes/formulario-productoras/formulario-productoras.component';
import { FormularioIdiomasComponent } from './componentes/formulario-idiomas/formulario-idiomas.component';
import { FormularioClasificacionesComponent } from './componentes/formulario-clasificaciones/formulario-clasificaciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ListaDirectoresComponent } from './componentes/lista-directores/lista-directores.component';
import { ListaActoresComponent } from './componentes/lista-actores/lista-actores.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { ListaProductorasComponent } from './componentes/lista-productoras/lista-productoras.component';
import { ListaCategoriasComponent } from './componentes/lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './componentes/lista-clasificaciones/lista-clasificaciones.component';
import { ListaIdiomasComponent } from './componentes/lista-idiomas/lista-idiomas.component';
import { DetallesComponent } from './componentes/D/detalles/detalles.component';
import { IdiomasDetalleComponent } from './componentes/D/idiomas-detalle/idiomas-detalle.component';
import { ClasificacionDetalleComponent } from './componentes/D/clasificacion-detalle/clasificacion-detalle.component';
import { CategoriaDetalleComponent } from './componentes/D/categoria-detalle/categoria-detalle.component';
import { ProductoraDetalleComponent } from './componentes/D/productora-detalle/productora-detalle.component';
import { ActorDetalleComponent } from './componentes/D/actor-detalle/actor-detalle.component';


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
    ListaUsuariosComponent,
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
    ActorDetalleComponent
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
