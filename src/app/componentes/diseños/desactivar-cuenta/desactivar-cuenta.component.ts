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


  ngOnInit(): void {
  }

}
