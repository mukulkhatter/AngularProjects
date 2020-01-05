import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';


import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolver } from './product-resolver.service';



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
      {path:'products/:id', component:ProductDetailsComponent,resolve:{resolveData:ProductResolver}},
{path:'products/:id/edit',component:ProductEditComponent,resolve:{resolveData:ProductResolver}}
    ]), 
  ]
  ,providers:[ProductResolver]
})
export class ProductModule { }
