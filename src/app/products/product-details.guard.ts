import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(private router :Router)
  {

  }
  // Guard is used for Authentication
  //Any time there is change in url or even in parameter of url this guard calls
  //for warning mechanism
  //Activated route snapshot is used to get info about current route, Parms and data 
  // state provide access to entire router state
  // return value can be observable or boolean or promise can be 
  //
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id=+next.url[1].path;
    if(isNaN(id)||id<0||id>6)
    {alert("Invalid Product ID");
    this.router.navigate(['./products']);
    return false;
    }else 
    return true;
  }
  
}
