import { Component } from '@angular/core';
import { Weather } from './shared/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app';

  weathers: Weather[] =[
    {
      main: 'Clouds',
      description: 'scattered clouds',
      temp: 20,
      name: 'London'
    },
    {
      main: 'Clouds',
      description: 'broken clouds',
      temp: 18,
      name: 'Paris'
    }];
}
