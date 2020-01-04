import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
providedIn:'root'// For Most Scenarios
})

export class ProductService
{
    private productServiceUrl:string="/assets/api/products.json";

    constructor(private http:HttpClient){
      

  }  
getProducts():Observable<IProduct[]>{
  return  this.http.get<IProduct[]>(this.productServiceUrl);
}
}