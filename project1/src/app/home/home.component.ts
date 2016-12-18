import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
title = "Home Component";
fname = "Sujal";
lname = "Patel";
setRequired = true;

@Input() userdetail; 
@Output() yilled = new EventEmitter();

alertYell(e){
    this.yilled.emit(e);
}
alertMe(message){
    alert(message);
}

constructor() { }

ngOnInit() {
}

}
