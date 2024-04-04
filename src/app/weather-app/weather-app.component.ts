import { Component } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent {
  city: string = '';
  apiData: any ;
  isError: boolean = false;
  constructor(private weatherData: ApiServiceService) {}
  
  
  searchCity(city: string) {
    this.weatherData.getWeatherData(city).subscribe({
      next: (data) => {
        this.apiData = data;
        this.isError = false; 
        this.city = '';
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
        this.isError = true;
        this.apiData = null; 
        this.city = '';
      }
    });
    
  }
}
