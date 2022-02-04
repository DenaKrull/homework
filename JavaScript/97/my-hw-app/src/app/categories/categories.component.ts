import { Component, Input } from '@angular/core';
import { Category } from '../shared/Category';
import { Item } from '../shared/Item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() category!: Category[];
  // items!: Item[];
  selectedCategory?: Category;

  categorySelected(event: Event) {
    const selection = (event.target as HTMLSelectElement)?.value;
    console.log(selection);
    this.selectedCategory = this.category.find(c => c.name === selection);
  }

}
