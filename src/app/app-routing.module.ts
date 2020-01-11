import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/pagenotfound.component';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './users/auth.guard';
import { SelectiveStrategyService } from './selective-strategy.service';


const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'products',
  // for to which module we want preloading 
  data:{preload:true},// we can pass through data property 
  canActivate:[AuthGuard],
loadChildren:()=>import('./products/product.module').then(m=>m.ProductModule)
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
    
];

@NgModule({
  // in for root of routing module we use enable tracing to true {enableTracing:true} 
  // to watch routing events 
  // to react to some routing events 
  // like when navigation start display spinner and when navigation ends hide spinner
  // we can use preloading strategies to pre load all lazy modules 
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:SelectiveStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
