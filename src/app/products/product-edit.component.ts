import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductResolved } from './product';

@Component({
    templateUrl:'./product-edit.component.html'
})
export class ProductEditComponent implements OnInit
{
constructor(private productService:ProductService,private route:ActivatedRoute){

}
product:IProduct;


// ng oninit method not reacted to changes if we are on the same page 
// if we make change in url segment also not initialized component Agaon 
ngOnInit():void{

this.route.data.subscribe(dt=>{

    const resolverData:IProduct=dt["resolveData"];

    this.product=resolverData;
})


    // as now we are using Resolvers
    //this.getProductDetails();
}

// Instead of using Activated Snapshot to get parameter value 
    // we use observable to subscribe for changes occur in url as
    // when parameter changes only our component reused not reinitialized
    // thats why we to use observable which observe for changes in parameter and 
    // notifies us
// getProductDetails(){
     
//     //const id=+this.route.snapshot.paramMap.get('id');
//     this.route.paramMap.subscribe(objParams=>{
//         const id=+objParams.get('id');
//         if(id!=0)
//         {
//         this.productService.getProducts().subscribe(x=>this.product=x.filter(y=>y.productId==id).shift())
//         }
//         else
//         this.product=null;
//     })

// }

}