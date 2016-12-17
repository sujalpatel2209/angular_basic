import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: ['HomeComponent']
})
export class AppComponent {
  title = 'Angular JS Page';
  name = 'Sujal Patel';
}
