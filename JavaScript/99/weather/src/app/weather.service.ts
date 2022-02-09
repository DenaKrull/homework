import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Weather, WeatherServerResponse } from './Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getWeather(zip: string): Observable<Weather> {
    const appId = '79f211f07776dd32c7db070614df9b06';
    return this.httpClient.get<WeatherServerResponse>(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${appId}&units=imperial`)
      .pipe(map(data => {
        return {
          place: data.name,
          icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          details: `${data.weather[0].description} and ${data.main.temp}`
        }
      })
      )
  }
}
