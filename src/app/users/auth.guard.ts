import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private router :Router,private authServ:AuthService)
    {
  
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkLoggedIn(state.url);
      }
      checkLoggedIn(url:string):boolean
      {
if(this.authServ.isLoggedIn)
return true;
this.router.navigate(['/login'])
return false;
      }
}