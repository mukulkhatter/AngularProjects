import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';


@Injectable({
  providedIn: 'root'
})

// This guard is created to warn before leaving 
//checks criteria before leaving 
//chek for unsaved changes
//confirm leavng incomplete operations
//any time called when url changes and matches different routes
//even if only difference  in route parameters
//only works when navigating in the angular applications
// doesn't checks when navigating to another site or user closes its browser.
// this canDeactivate guard is interface that has generic parameters 
// generic parameter is name of component that is going to use this guard
//

export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  // we can access to any of property or methods component passed in canDeactivateGuard
  // it means we can use any property or methods of productEditComponent


  canDeactivate(
      component:ProductEditComponent, // component parameter same as generic parameter
    currentRoute: ActivatedRouteSnapshot,// Current route snapshot
    currentState: RouterStateSnapshot,
    nextState?:RouterStateSnapshot):boolean  {

if(!component.isDirty)
{
  let productName:string;
  if(component.product)
  productName=component.product.productName||"New Product";
  else
  return true;
return confirm(`All Changes made to ${component.product.productName} will lost`);
}
      return true; // continue to next route false means to cancel navigation and return to current page
  // return value can be boolean or promise<boolean>
    }
  
}
