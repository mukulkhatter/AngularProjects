import { Injectable } from '@angular/core';
import { PreloadingStrategy,Route } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class SelectiveStrategyService implements PreloadingStrategy{

    preload(route:Route,load:Function):Observable<any>
    {
        debugger;
        // here we decide weather or not to load a particular module 
        if(route.data&& route.data['preload'])
        return load();
        // since this method returns observable so we return observable of null by using of operator
return of(null);
    }
}