import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';


import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id', canActivate:[ProductDetailsGuard],component:ProductDetailsComponent},
{path:'products/:id/edit',component:ProductEditComponent}
    ]), 
  ]
})
export class ProductModule { }
