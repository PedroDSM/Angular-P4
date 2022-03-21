import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/peticiones/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {
  constructor(private PeticionesService: PeticionesService, private router: Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(this.PeticionesService.CurrentUser.rol)
    const isAuthorized =  route.data['expectedRoles'].includes(this.PeticionesService.CurrentUser.rol);
    console.log(isAuthorized)
    if(!isAuthorized){
      this.router.navigateByUrl('/error');
    }
    return isAuthorized
  }
}

