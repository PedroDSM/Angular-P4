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
    const isAuthorized =  this.PeticionesService.usuarios.includes(route.data['expectedRoles']);

    if(!isAuthorized){
      this.router.navigateByUrl('/error');
    }
    return isAuthorized
  }
  
//   private isAuthorized(route: ActivatedRouteSnapshot){
//     const roles = ['Admin'];
//     const expectedRoles = route.data['expectedRoles'];
//     const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
//     return roleMatches < 0 ? false : true;
//  }
}

