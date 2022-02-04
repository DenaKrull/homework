import { Component, Input } from '@angular/core';
import { Item } from '../shared/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {

 @Input() items!: Item;

}
