import { Component } from '@angular/core';
import { Category } from './shared/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCS HW';
  category: Category[] = [{
    name: "MP3 Players",
    items: [{
      name: 'Apple Ipod', price: 99.99
    },
    {
      name: 'eSlim', price: 199.99
    }]
  },
  {
    name: "Laptops",
    items: [{ name: 'Apple MacBook', price: 999.99 }, { name: 'Dell XPS', price: 799.99 }]
  },
  {
    name: "Phones",
    items: [{ name: 'Apple iPhone', price: 699.99 }, { name: 'Samsung Galaxy', price: 299.99 }]
  }
  ];
}
