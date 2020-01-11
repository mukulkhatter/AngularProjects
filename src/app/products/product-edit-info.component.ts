import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';


@Component({
    templateUrl:'./product-edit-info.component.html'
})


export class ProductEditInfoComponent implements OnInit
{
    product:IProduct;
    constructor(private route:ActivatedRoute)
    {

    }
ngOnInit()
{
this.route.parent.data.subscribe(data=>{
    this.product=data['resolveData']
});
}
}