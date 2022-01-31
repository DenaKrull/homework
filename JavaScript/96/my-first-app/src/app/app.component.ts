import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';
  person: Person = {
    name: "Dena",
    age: 25,
    address: "123 Main St"
  }
}
