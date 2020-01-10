import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { AuthGuard } from '../users/auth.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ConvertToSpacesPipe,
    ProductEditInfoComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      // for grouping of routes and component less routes
      // Add default path in Child Route
      // remove Component from parent Route  component:ProductListComponent
      //Then Child routes are now part of product remove product before them in child route
      {path:'products',
      canActivate:[AuthGuard],
      children:[
        {
          // Add default Path
path:'',component:ProductListComponent

        },
        {path:':id', component:ProductDetailsComponent,resolve:{resolveData:ProductResolver}},

        {path:':id/edit',component:ProductEditComponent,resolve:{resolveData:ProductResolver},
  children:[
    {path:'',redirectTo:'info',pathMatch:'full'},
    {path:'info',component:ProductEditInfoComponent},
  ]}
      ]       
    
    },
      
    ]), 
  ]
  ,providers:[]
})
export class ProductModule { }
