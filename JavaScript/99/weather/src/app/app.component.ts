import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './Weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zip!: string;
  selectedWeather?: Observable<Weather>;

  constructor(private weatherService: WeatherService){}

  zipChanged() {
    console.log(`zip changed to ${this.zip}`);

    if (this.zip.length !== 5) {
      return;
    }
    this.selectedWeather = this.weatherService.getWeather(this.zip);
  }
 
}
