import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/pagenotfound.component';
import { WelcomeComponent } from './home/welcome.component';


const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
    
];

@NgModule({
  // in for root of routing module we use enable tracing to true {enableTracing:true} 
  // to watch routing events 
  // to react to some routing events 
  // like when navigation start display spinner and when navigation ends hide spinner
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
