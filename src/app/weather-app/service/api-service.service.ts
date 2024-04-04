import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(city: string) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=748778755175dcebdaf648c31eb5369b&units=metric&q=${city}`;
    return this.http.get<any>(apiURL)
  }
}
