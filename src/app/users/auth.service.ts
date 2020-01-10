import { Injectable } from '@angular/core';
import { user } from './user';

@Injectable({
    providedIn:'root'
})
export class AuthService
{
    
curentUser:user;

    constructor()
{

}
get isLoggedIn():boolean{
    return !!this.curentUser;  // !! converts object to boolean value if is null then false else true
}

login(userName:string,pwd:string):boolean
{
    if(!userName||!pwd)
    return;
if(userName.toLowerCase()=='admin')
{
    this.curentUser={name:userName,
    IsAdmin:true}
    return true;
}else{
    this.curentUser={name:userName,
        IsAdmin:false}
return true;
    }
}
logout():void
{
    this.curentUser=null;
}
}