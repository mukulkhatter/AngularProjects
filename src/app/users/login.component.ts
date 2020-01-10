import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent{
    constructor(private router:Router,private authService:AuthService){

    }
userName:string='';
password:string='';
    btnLogIn(){
  
if(this.authService.login(this.userName,this.password))
        this.router.navigate(['/products']);
    }
}