import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-market',
templateUrl: './market.component.html',
styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

marketItem = [
{ desc : 'Book1', type: 'B1' },
{ desc : 'Book2', type: 'B2' },
{ desc : 'Book3', type: 'B3' },
{ desc : 'Book4', type: 'B4' },
];
    
addMarketItem(){
    alert('Hello');
}
constructor() { }

ngOnInit() {
}

}
