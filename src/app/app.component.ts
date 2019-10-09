import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  name = 'Braskin Ulloa';
  status: boolean;
  constructor(){
    console.log('caontructor.....');
  }
  getUserStatus(){
    this.status = false;
  }
}
