import { Component, Input, } from '@angular/core';
import { Weather } from '../Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() weather?: Weather | null;

}
