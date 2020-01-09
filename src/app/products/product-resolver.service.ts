import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {ProductResolved,IProduct} from './product'

import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class ProductResolver implements Resolve<IProduct>
{
    
    constructor(private productService:ProductService){
        
    }
    // We implement resolve function of Interface 
    // resolve method must have return type.
    // so we are returning particular Product from service.
dataResolver:ProductResolved;
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IProduct>{
    
    const id =+route.paramMap.get('id');
if(isNaN(id)){
const message="Id is not valid";
console.error(message);

    //return  of({product:null,error:message});
    
}
 
return this.productService.getProduct(id);

}
}