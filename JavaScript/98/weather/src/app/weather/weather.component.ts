import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../shared/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() weathers!: Weather[];


}
