import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  public usuarios: any = []
  constructor(private peticion: PeticionesService, private router: Router) { }
  ngOnInit(): void {
    this.peticion.getAll().subscribe(
      respuesta=>{
        this.usuarios = respuesta.users
      });
    // console.log(this.usuarios)
  }
  leer(id:any){
    this.router.navigateByUrl('lista-usuarios/'+id+'/detalles');
  }
}
