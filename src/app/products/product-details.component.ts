import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({

    templateUrl:'./product-details.component.html',
    styleUrls:['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit
{
constructor(private prdService:ProductService,private route:ActivatedRoute,private router:Router)
{
// we initialized activated route service here 
// to read parameter value from url segment
}
product:IProduct;
pageTitle:string="Product Details";

ngOnInit(){
    // calls after construuctor
let productId=  +this.route.snapshot.paramMap.get('id');
this.prdService.getProducts().subscribe(x=>{
     this.product=x.filter(y=>y.productId==productId)[0];
     
    }
    
    )

}
onBackButtonClick():void{
    this.router.navigate(['./products'],{queryParamsHandling:'preserve'})
}
}