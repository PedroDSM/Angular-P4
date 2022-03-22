import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';
import { TokenService } from 'src/app/peticiones/token.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {
  constructor(private PeticionesService: PeticionesService, private t: TokenService, private router: Router ){}
  public usuario: any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // console.log(this.PeticionesService.CurrentUser.rol)
    this.t.validar().subscribe(respuesta=>{
      const isAuthorized =  route.data['expectedRoles'].includes(respuesta.rol);
      console.log(isAuthorized)
      if(!isAuthorized){
        this.router.navigateByUrl('/error');
      }
      return isAuthorized
    })
    return true
  }
}

