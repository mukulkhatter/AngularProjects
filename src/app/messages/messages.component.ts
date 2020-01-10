import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
    templateUrl:'./messages.component.html'
})
export class MessagesComponent implements OnInit
{
    messages:string[]=[];
constructor(private _mesgService:MessagesService)
{    
    _mesgService.addMessages("Hello");
}
ngOnInit(){
this.messages=this._mesgService.getAllMessages();
}

}