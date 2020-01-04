import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean=false;
  pageTitle:string = 'Acme Product Management';
}
