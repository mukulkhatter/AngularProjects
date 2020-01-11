import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, ProductResolved } from './product';

@Component({
    templateUrl:'./product-edit.component.html'
})
export class ProductEditComponent implements OnInit
{
constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router){

}


get product():IProduct{
return this.currentProduct;
}

set product(value:IProduct){
    this.currentProduct=value;
    // using spread operator to make clone of another object
    this.orignalProduct={...value};
}

private orignalProduct:IProduct=null;
private currentProduct:IProduct=null;

get isDirty():boolean
{
return JSON.stringify(this.orignalProduct)===JSON.stringify(this.currentProduct);
}

// ng oninit method not reacted to changes if we are on the same page 
// if we make change in url segment also not initialized component Agaon 
ngOnInit():void{

this.route.data.subscribe(dt=>{
console.log(dt);
    const resolverData:IProduct=dt["resolveData"];

    this.product=resolverData;
})


    // as now we are using Resolvers
    //this.getProductDetails();
}

onCancelButtonClick(){
    
}

onSaveButtonClick(){
    // if id ==0 call create method 
    // else create Update method
    
this.reset();
this.router.navigate(['/products']);
}

reset()
{
this.orignalProduct=null;
this.currentProduct=null;
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