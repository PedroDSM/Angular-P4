import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
import { TokenService } from '../peticiones/token.service';
@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private router:Router,private t: TokenService, private cookieService: CookieService){
  }
  redireccion(cookies:boolean):any{
    if(!cookies){
      return this.router.navigate(['/login']);
    }
  }

  tokenvalido = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie=this.cookieService.check('token');
    this.t.validar().subscribe(
      respuesta=>{
        this.redireccion(true)
      },error=>{
        this.redireccion(false)
      }
    )
    return cookie;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie=this.cookieService.check('token');
    // this.t.validar().subscribe(
    //   respuesta=>{
    //     this.redireccion(true)
    //   },error=>{
    //     this.redireccion(false)
    //   }
    // )
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
