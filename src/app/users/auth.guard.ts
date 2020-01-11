import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate,CanLoad {
    constructor(private router :Router,private authServ:AuthService)
    {
  
    }
// we added this method as to check in lazy loading
// dont download a particular component untill this method return true
// so if he is not logged in then why we load a module.
canLoad(route:Route):boolean{
  debugger;
return this.checkLoggedIn(route.path)
}

    canActivate(
      // activated route snapshot provides info about activated route or about to be activated
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkLoggedIn(state.url);
      }
      checkLoggedIn(url:string):boolean
      {
        // if loggedin then returning true
if(this.authServ.isLoggedIn)
return true;
// Cancelling Navgation to requested guard and returning false
this.router.navigate(['/login'])
return false;
      }
}