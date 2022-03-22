import { Directive, Input } from '@angular/core';
import { TokenService } from '../peticiones/token.service';

@Directive({
  selector: '[appRol]'
})
export class RolDirective {
  currentUser:any
  constructor(private peticion: TokenService) { }
  // ngOnInit():void{
  //   this.peticion.validar().subscribe((user: any)=>{
  //     this.currentUser = user
  //     this.updateView()
  //     } 
  //   )
  // }

  // @Input()
  // set appRole(val: Array<string>){
  //   console.log(' ****', val);
  //   this.permiso = val;
  //   this.updateView()
  // }

}
