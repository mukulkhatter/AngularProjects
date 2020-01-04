import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges
{

starWidth:number;
@Input() rating:number;
@Output() ratingClicked:EventEmitter<string>=
new EventEmitter();
ngOnChanges():void{
this.starWidth=this.rating*75/5;
}
onClick(){
 this.ratingClicked.emit(`Rating is ${this.rating}`);
}
}