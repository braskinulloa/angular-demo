import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  person: {
    name: string,
    lastName: string
  }
  status: boolean;
  constructor(){
    console.log('caontructor.....');
    this.getUserStatus;
  }
  getUserStatus(){
    this.status = this.person?true:false;
  }
  getPersonFullName(){
    return this.person?this.person.name + ' ' + this.person.lastName:'(no name defined)';;
  }
}
