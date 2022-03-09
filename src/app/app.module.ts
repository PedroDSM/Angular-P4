import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormularioDirectoresComponent } from './formulario-directores/formulario-directores.component';
import { FormularioActoresComponent } from './formulario-actores/formulario-actores.component';
import { FormularioPeliculasComponent } from './formulario-peliculas/formulario-peliculas.component';
import { FormularioProductorasComponent } from './formulario-productoras/formulario-productoras.component';
import { FormularioIdiomasComponent } from './formulario-idiomas/formulario-idiomas.component';
import { FormularioClasificacionesComponent } from './formulario-clasificaciones/formulario-clasificaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaProductorasComponent } from './lista-productoras/lista-productoras.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaClasificacionesComponent } from './lista-clasificaciones/lista-clasificaciones.component';
import { ListaIdiomasComponent } from './lista-idiomas/lista-idiomas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FormularioDirectoresComponent,
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
