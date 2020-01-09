import { Component } from '@angular/core';
// Router Events to perfrom some events like spinner on and off for that we subscribe 
// to router events at root level for all route
import{Router,Event,NavigationStart,NavigationEnd,NavigationError,NavigationCancel} from '@angular/router' 
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean=false;
  pageTitle:string = 'Acme Product Management';
loading=true;// use for spinner on and off
constructor(private router:Router) // injecting Angular Router 
{
// subscribing to events 
router.events.subscribe((routerEvent:Event)=>{
  // now we can subscribe to any event
  if(routerEvent instanceof NavigationStart){
    
    // for navigation start
    this.loading=true;
  }
  if(routerEvent instanceof NavigationEnd||routerEvent instanceof NavigationCancel){
    // for navigation start
    this.loading=false;
  }
})
}


}
