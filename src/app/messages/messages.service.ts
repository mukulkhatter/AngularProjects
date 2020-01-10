import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class MessagesService
{
    messages:string[]=[];

getAllMessages():string[]{
return this.messages;
}

addMessages(message:string):void
{
this.messages.unshift(`${message} ' at '${new Date().toLocaleString()}`);
}
}