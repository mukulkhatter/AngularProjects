import{Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({

templateUrl:'./product-list.component.html',
styleUrls:['./product-list.component.css']

})

export class ProductListComponent implements OnInit
{
// Now question arises where should we put the code to get data from service 
// In Constructor no we should not want to all of that to be executed in constructor.
// so for this we use ngOnInit hook method for this purpose.
// Now Constructor is called befor ngOnInit Method.
constructor(private _ProductService:ProductService,private route:ActivatedRoute)
{
  this.listFilter="";

}
products:IProduct[];
title:string="Products List";
_listFilter:string;
get listFilter():string
{
  return this._listFilter
}
set listFilter(value:string)
{
  this._listFilter=value;
  this.filteredProducts=this._listFilter?this.getFilteredProducts(this._listFilter):this.products;
}

filteredProducts:IProduct[];

showImage:boolean=false;

ngOnInit():void{

this._ProductService.getProducts().subscribe({
  next:products=>
  {this.products=products
    this.filteredProducts=this.products;
  },
  complete:()=>{this.listFilter=this.route.snapshot.queryParamMap.get('filterBy')||'';
  this.showImage= this.route.snapshot.queryParamMap.get('img')==='true';
console.log("Complete");  
}
  ,error:err=>console.log(err)}); 
  
}

  hideShowImage():void{
    this.showImage=!this.showImage;
}

getFilteredProducts(filterBy:string):IProduct[]{
 
  filterBy=filterBy.toLocaleLowerCase();
  return this.products.filter((product)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1 
  
  )
}
onRatingClicked(message:string){
  this.title=message;
}
}