import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';

@Component({
  selector: 'app-desactivar-cuenta',
  templateUrl: './desactivar-cuenta.component.html',
  styleUrls: ['./desactivar-cuenta.component.css']
})
export class DesactivarCuentaComponent implements OnInit {

  constructor(private peticion: PeticionesService, private router: Router) { }
email:any
  ngOnInit(): void {
  }

  desactivarCuenta(){
    this.peticion.actdes(this.email).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/login');
          alert(respuesta.mensaje)
      },
      error=>{
        alert(error.error.error)
      })
  
   }
}
