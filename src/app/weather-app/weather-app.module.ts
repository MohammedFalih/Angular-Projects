import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppComponent } from './weather-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from './service/decimal.pipe';



@NgModule({
  declarations: [
    WeatherAppComponent,
    DecimalPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WeatherAppComponent
  ]
})
export class WeatherAppModule { }
