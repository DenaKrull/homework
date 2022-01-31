import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent  {

  constructor() { }
  @Input() person: Person = { name: '', age: 0, address: '' };



}
